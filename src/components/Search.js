// src/components/Search.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { API, graphqlOperation, Storage } from "aws-amplify";
import { listDeals, listEvents } from "../graphql/queries"; // add your other queries if needed
import { format, parseISO, isValid, addDays, isAfter } from "date-fns";
// import { API, graphqlOperation, Storage } from "aws-amplify";
// import Amplify from "aws-amplify";
// import { Amplify } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import { API, graphqlOperation, Storage, Amplify } from 'aws-amplify';
import {
    IoWineOutline,
    IoBeerOutline,
    IoRestaurantOutline,
    IoSchoolOutline,
    IoMusicalNotesOutline,
    IoPartlySunnyOutline,
    IoStorefrontOutline,
    IoPeopleOutline
} from "react-icons/io5";
import { FaArrowLeft, FaFilter } from "react-icons/fa";
import PrintCardsVerticalSmall from "./PrintCardsVerticalSmall";
import PrintCardsVerticalSmallDeal from "./PrintCardsVerticalSmallDeal";

// Example CSS (adjust path to your actual file)
import "../styles/Search.css";

function Search() {
    Amplify.configure(awsExports); // if needed

    // const { API, graphqlOperation, Storage } = Amplify;

    // Basic user info
    const [userID, setUserID] = useState("");
    const [myUsername, setMyUsername] = useState("");
    const [emailVerified, setEmailVerified] = useState(false);
    const [authenticatedUser, setAuthenticatedUser] = useState(false);

    // Loading
    const [isLoading, setIsLoading] = useState(false);

    // Search states
    const [searchQuery, setSearchQuery] = useState("");
    const [date, setDate] = useState("");
    const [eventTypes, setEventTypes] = useState([]);
    const [dealTypes, setDealTypes] = useState([]);
    const [school, setSchool] = useState("");
    const [cityName, setCityName] = useState("");
    const [organization, setOrganization] = useState("");

    // Toggles
    const [eventCategory, setEventCategory] = useState("allEvents"); // "deals" or "allEvents"
    const [isFocused, setIsFocused] = useState(false);

    // For modals
    const [modalVisible, setModalVisible] = useState(false);
    const [schoolModalVisible, setSchoolModalVisible] = useState(false);
    const [eventTypeModalVisible, setEventTypeModalVisible] = useState(false);
    const [calendarComponent, setCalendarComponent] = useState(false);

    // Arrays
    const [initialArray, setInitialArray] = useState([]);
    const [eventArray, setEventArray] = useState([]);
    const [initialArrayDeal, setInitialArrayDeal] = useState([]);
    const [dealArray, setDealArray] = useState([]);

    // Category arrays
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [todaysEvents, setTodaysEvents] = useState([]);
    const [thisWeekEvents, setThisWeekEvents] = useState([]);
    const [cityEvents, setCityEvents] = useState([]);
    const [schoolEvents, setSchoolEvents] = useState([]);
    const [socialEvents, setSocialEvents] = useState([]);
    const [entertainmentEvents, setEntertainmentEvents] = useState([]);
    const [educationalEvents, setEducationalEvents] = useState([]);
    const [sportsEvents, setSportsEvents] = useState([]);
    const [otherEvents, setOtherEvents] = useState([]);
    const [torontoEvents, setTorontoEvents] = useState([]);

    // Deals by day
    const [monDeals, setMonDeals] = useState([]);
    const [tueDeals, setTueDeals] = useState([]);
    const [wedDeals, setWedDeals] = useState([]);
    const [thuDeals, setThuDeals] = useState([]);
    const [friDeals, setFriDeals] = useState([]);
    const [satDeals, setSatDeals] = useState([]);
    const [sunDeals, setSunDeals] = useState([]);

    // If user doesn't have an account
    const [requireAccountModal, setRequireAccountModal] = useState(false);

    // Quick picks
    // Web quick picks with icons
    const QUICK_DEAL_TYPES = [
        {
            label: "Drink Specials",
            colors: ["#fbc2eb", "#a18cd1"],
            icon: <IoWineOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        },
        {
            label: "Happy Hour",
            colors: ["#ffecd2", "#fcb69f"],
            icon: <IoBeerOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        },
        {
            label: "Restaurant Discounts",
            colors: ["#e2f6df", "#9dcc7f"],
            icon: <IoRestaurantOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        },
        {
            label: "Student Discount",
            colors: ["#f6d365", "#fda085"],
            icon: <IoSchoolOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        }
    ];

    const QUICK_EVENT_TYPES = [
        {
            label: "Club Nights",
            colors: ["#fad0c4", "#ff9a9e"],
            icon: <IoMusicalNotesOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        },
        {
            label: "Festivals",
            colors: ["#c2e9fb", "#a1c4fd"],
            icon: <IoPartlySunnyOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        },
        {
            label: "Markets",
            colors: ["#667eea", "#764ba2"],
            icon: <IoStorefrontOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        },
        {
            label: "Networking Event",
            colors: ["#f093fb", "#f5576c"],
            icon: <IoPeopleOutline style={{ fontSize: "24px", marginBottom: "6px" }} />
        }
    ];


    // On mount, mock auth + fetch
    useEffect(() => {
        setIsLoading(true);

        // Mock user
        setUserID("mockUserID");
        setMyUsername("mockUsername");
        setEmailVerified(true);
        setAuthenticatedUser(true);

        setIsLoading(false);

        // Now fetch events/deals
        fetchEvents();
        fetchDeals();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchEvents() {
        try {
            setIsLoading(true);
            const todayStr = format(new Date(), "yyyy-MM-dd");
            let all = [];
            let nextToken = null;
            do {
                const res = await API.graphql(
                    graphqlOperation(listEvents, {
                        nextToken,
                        filter: { date: { ge: todayStr } },
                        limit: 1000,
                    })
                );
                const items = res?.data?.listEvents?.items || [];
                all = all.concat(items);
                nextToken = res?.data?.listEvents?.nextToken;
            } while (nextToken);

            // map
            const mapped = [];
            for (let ev of all) {
                let obj = {
                    myUserID: userID,
                    eventUserID: ev?.userId,
                    eventID: ev?.id,
                    eventName: ev?.eventName,
                    eventUsername: ev?.userName,
                    eventDate: ev?.date,
                    eventOrganization: ev?.organization,
                    eventPrivacy: ev?.eventPrivacy,
                    eventCity: ev?.city,
                    eventCountry: ev?.country,
                    eventType: ev?.eventType,
                    school: ev?.school,
                    image: null,
                    verifiedEvent: ev?.verifiedEvent,
                    featuredEvent: ev?.featuredEvent,
                };
                if (ev?.image1) {
                    try {
                        obj.image = await Storage.get(ev.image1);
                    } catch { }
                }
                mapped.push(obj);
            }

            mapped.sort((a, b) => {
                if (!a.eventDate || !b.eventDate) return 0;
                return new Date(a.eventDate) - new Date(b.eventDate);
            });

            console.log('====================================');
            console.log('Events:', mapped);
            console.log('====================================');

            setInitialArray(mapped);
            setEventArray(mapped);
            setIsLoading(false);
        } catch (err) {
            console.log("Error fetching events:", err);
            setIsLoading(false);
        }
    }

    async function fetchDeals() {
        try {
            setIsLoading(true);
            const todayStr = format(new Date(), "yyyy-MM-dd");
            let all = [];
            let nextToken = null;
            do {
                const res = await API.graphql(
                    graphqlOperation(listDeals, {
                        nextToken,
                        filter: {
                            or: [{ endDate: { eq: null } }, { endDate: { ge: todayStr } }],
                        },
                        limit: 1000,
                    })
                );
                const items = res?.data?.listDeals?.items || [];
                all = all.concat(items);
                nextToken = res?.data?.listDeals?.nextToken;
            } while (nextToken);

            const mapped = [];
            for (let dl of all) {
                const nextDate = getNextOccurrence(dl, new Date());
                let obj = {
                    myUserID: userID,
                    dealUserID: dl?.userId,
                    dealID: dl?.id,
                    dealName: dl?.dealName,
                    dealUsername: dl?.userName,
                    dealDate: nextDate ? nextDate.toISOString() : null,
                    dealEndDate: dl?.endDate,
                    recurrenceType: dl?.recurrenceType,
                    daysOfWeek: dl?.daysOfWeek,
                    dayOfMonth: dl?.dayOfMonth,
                    dayOfYear: dl?.dayOfYear,
                    dealOrganization: dl?.organization,
                    dealPrivacy: dl?.dealPrivacy,
                    dealPremium: dl?.premium,
                    dealCity: dl?.city,
                    dealCountry: dl?.country,
                    dealType: dl?.dealType,
                    school: dl?.school,
                    image: null,
                    ageLimit: dl?.ageLimit,
                    verifiedDeal: dl?.verifiedDeal,
                    featuredDeal: dl?.featuredDeal,
                };
                if (dl?.image1) {
                    try {
                        obj.image = await Storage.get(dl.image1);
                    } catch { }
                }
                mapped.push(obj);
            }

            // sort
            mapped.sort((a, b) => {
                if (!a.dealDate && !b.dealDate) return 0;
                if (!a.dealDate) return 1;
                if (!b.dealDate) return -1;
                return new Date(a.dealDate) - new Date(b.dealDate);
            });

            setInitialArrayDeal(mapped);
            setDealArray(mapped);
            setIsLoading(false);
        } catch (err) {
            console.log("Error fetching deals:", err);
            setIsLoading(false);
        }
    }

    // Calculate next occurrence for a repeating deal
    function getNextOccurrence(deal, today) {
        if (!deal?.startDate) return null;
        const start = parseISO(deal.startDate);
        if (!isValid(start)) return null;

        let end = null;
        if (deal.endDate) {
            const e = parseISO(deal.endDate);
            if (isValid(e)) end = e;
        }

        // if once
        const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        if (deal.recurrenceType === "ONCE") {
            return todayDay > startDay ? null : startDay;
        }


        // 4) For recurring deals, we begin searching from the later of startDay or todayDay
        let candidate = todayDay >= startDay ? todayDay : startDay;

        // 5) DAILY
        if (deal.recurrenceType === 'DAILY') {
            // If we have an end date and candidate is after it, no occurrences left
            if (end && isAfter(candidate, end)) {
                return null;
            }
            return candidate; // "Daily" means any day from candidate forward is valid
        }

        // 6) WEEKLY
        if (deal.recurrenceType === 'WEEKLY' && Array.isArray(deal.daysOfWeek)) {
            const dayMap = {
                SUN: 0,
                MON: 1,
                TUE: 2,
                WED: 3,
                THU: 4,
                FRI: 5,
                SAT: 6,
            };
            const targetDays = deal.daysOfWeek.map((d) => dayMap[d]);

            // Try up to ~2 months to find the next valid weekday
            for (let i = 0; i < 60; i++) {
                if (targetDays.includes(candidate.getDay())) {
                    if (end && isAfter(candidate, end)) {
                        return null;
                    }
                    return candidate;
                }
                candidate = addDays(candidate, 1);
            }
            return null;
        }

        // 7) MONTHLY
        if (deal.recurrenceType === 'MONTHLY' && Array.isArray(deal.dayOfMonth)) {
            // e.g. dayOfMonth = [3, 19]
            // We'll search up to 2 years ahead
            for (let i = 0; i < 730; i++) {
                const dayNum = candidate.getDate(); // 1..31
                if (deal.dayOfMonth.includes(dayNum)) {
                    if (end && isAfter(candidate, end)) {
                        return null;
                    }
                    return candidate;
                }
                candidate = addDays(candidate, 1);
            }
            return null;
        }

        // 8) YEARLY
        // We'll compare only the "MM-dd" part (e.g., "02-24") ignoring the year
        if (deal.recurrenceType === 'YEARLY' && Array.isArray(deal.dayOfYear)) {
            const dayOfYearSet = new Set(
                deal.dayOfYear.map((d) => d.length === 5 ? d : d.substring(5))
            );

            for (let i = 0; i < 730; i++) {
                const md = format(candidate, 'MM-dd'); // e.g. "02-24"
                if (dayOfYearSet.has(md)) {
                    if (end && isAfter(candidate, end)) {
                        return null;
                    }
                    return candidate;
                }
                candidate = addDays(candidate, 1);
            }
            return null;
        }

        return null;
    }

    // Once we have the events in initialArray, we can categorize them
    useEffect(() => {
        if (!initialArray.length) return;

        // 1) featured
        const featured = initialArray.filter((ev) => ev.featuredEvent === true);
        setFeaturedEvents(featured);

        // 2) today
        const tStr = format(new Date(), "yyyy-MM-dd");
        const todayE = initialArray.filter((ev) => ev.eventDate === tStr);
        setTodaysEvents(todayE);

        // 3) this week
        const oneWeek = new Date();
        oneWeek.setDate(oneWeek.getDate() + 7);
        const wStr = format(oneWeek, "yyyy-MM-dd");
        const weekE = initialArray.filter(
            (ev) => ev.eventDate && ev.eventDate <= wStr
        );
        setThisWeekEvents(weekE);

        // 4) city
        if (cityName) {
            const cityE = initialArray.filter((ev) =>
                ev.eventCity?.toLowerCase().includes(cityName.toLowerCase())
            );
            setCityEvents(cityE);
        }

        // 5) school
        if (school) {
            const schE = initialArray.filter((ev) =>
                ev.school?.toLowerCase().includes(school.toLowerCase())
            );
            setSchoolEvents(schE);
        }

        // 6) social
        const social = initialArray.filter((ev) =>
            ["Festivals", "Markets", "Gala & Fundraisers", "Meet & Greet", "Performances & Screenings", "Art & Culture", "Attractions", "Trade Shows & Fairs"].includes(ev.eventType)
        );
        setSocialEvents(social);

        // 7) entertainment
        const entertain = initialArray.filter((ev) =>
            ["Music & Concerts", "Club Nights", "Themed Party", "Wine Tasting", "Car Shows"].includes(ev.eventType)
        );
        setEntertainmentEvents(entertain);

        // 8) educational
        const edu = initialArray.filter((ev) =>
            ["Workshop/Seminar", "Networking Event", "Business Conference", "Science & Tech", "General School Events"].includes(ev.eventType)
        );
        setEducationalEvents(edu);

        // 9) sports
        const sports = initialArray.filter((ev) => ev.eventType === "Sports & Fitness Events");
        setSportsEvents(sports);

        // 10) other
        const oth = initialArray.filter((ev) => ev.eventType === "Other");
        setOtherEvents(oth);

        // 11) default Toronto
        const tor = initialArray.filter((ev) => ev.eventCity === "Toronto");
        setTorontoEvents(tor);

    }, [initialArray, cityName, school]);




    useEffect(() => {
        // 1) If there are no deals at all, clear out each weekday's state.
        if (!initialArrayDeal || initialArrayDeal.length === 0) {
            setMonDeals([]);
            setTueDeals([]);
            setWedDeals([]);
            setThuDeals([]);
            setFriDeals([]);
            setSatDeals([]);
            setSunDeals([]);
            return;
        }

        // 2) Create empty arrays for each weekday.
        const mondayDeals = [];
        const tuesdayDeals = [];
        const wednesdayDeals = [];
        const thursdayDeals = [];
        const fridayDeals = [];
        const saturdayDeals = [];
        const sundayDeals = [];

        // 3) Helper function to check if a deal occurs on a given date,
        //    including the advanced recurrence logic (ONCE, DAILY, WEEKLY, etc.).
        function doesDealOccurOnDate(deal, date) {
            // A) Parse the deal’s start date
            if (!deal.dealDate) return false;
            const start = parseISO(deal.dealDate);
            if (!isValid(start)) return false;

            // B) Optional end date
            let end = null;
            if (deal.dealEndDate) {
                const parsedEnd = parseISO(deal.dealEndDate);
                if (isValid(parsedEnd)) {
                    end = parsedEnd;
                }
            }

            // If the current date is before the start OR after the end, skip
            if (date < start) return false;
            if (end && date > end) return false;

            // C) Recurrence logic
            // dayMap helps us match strings like "MON" to day indices (0=Sun,...)
            const dayMap = {
                SUN: 0,
                MON: 1,
                TUE: 2,
                WED: 3,
                THU: 4,
                FRI: 5,
                SAT: 6,
            };
            const dateDayOfWeek = date.getDay(); // 0=Sun, 1=Mon, etc.
            const dayOfMonth = date.getDate();   // e.g. 3 or 26
            const mmdd = format(date, 'MM-dd');  // e.g. "03-21"

            switch (deal.recurrenceType) {
                case 'ONCE':
                    // Must match exactly the deal's start date
                    return (
                        date.getFullYear() === start.getFullYear() &&
                        date.getMonth() === start.getMonth() &&
                        date.getDate() === start.getDate()
                    );

                case 'DAILY':
                    // Every single day between start and end
                    return true;

                case 'WEEKLY':
                    // Must have daysOfWeek array (like ["MON","WED"]) and match the current day
                    if (!Array.isArray(deal.daysOfWeek)) return false;
                    return deal.daysOfWeek.some(d => dayMap[d] === dateDayOfWeek);

                case 'MONTHLY':
                    // Must have dayOfMonth array (like ["3","19"]) and match the date's dayOfMonth
                    if (!Array.isArray(deal.dayOfMonth)) return false;
                    return deal.dayOfMonth.includes(String(dayOfMonth));

                case 'YEARLY':
                    // Must have dayOfYear array (like ["02-24","11-10"]) and match MM-dd
                    if (!Array.isArray(deal.dayOfYear)) return false;
                    return deal.dayOfYear.some(d => {
                        // Some deals store "YYYY-MM-dd", so we normalize
                        const normalized = d.length === 5 ? d : d.substring(5);
                        return normalized === mmdd;
                    });

                default:
                    // If there's no valid recurrenceType, treat as false
                    return false;
            }
        }

        // 4) Enumerate the next 7 days from 'today'
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const currentDay = new Date(today);
            currentDay.setDate(today.getDate() + i);

            // Check each deal
            initialArrayDeal.forEach((deal) => {
                if (doesDealOccurOnDate(deal, currentDay)) {
                    const dayIndex = currentDay.getDay(); // 0=Sun, 1=Mon,...
                    switch (dayIndex) {
                        case 0:
                            sundayDeals.push(deal);
                            break;
                        case 1:
                            mondayDeals.push(deal);
                            break;
                        case 2:
                            tuesdayDeals.push(deal);
                            break;
                        case 3:
                            wednesdayDeals.push(deal);
                            break;
                        case 4:
                            thursdayDeals.push(deal);
                            break;
                        case 5:
                            fridayDeals.push(deal);
                            break;
                        case 6:
                            saturdayDeals.push(deal);
                            break;
                        default:
                            break;
                    }
                }
            });
        }

        // 5) Now apply filters like dealTypes, cityName, school, etc.

        let filteredMon = mondayDeals;
        let filteredTue = tuesdayDeals;
        let filteredWed = wednesdayDeals;
        let filteredThu = thursdayDeals;
        let filteredFri = fridayDeals;
        let filteredSat = saturdayDeals;
        let filteredSun = sundayDeals;

        // Filter by dealTypes
        if (dealTypes.length > 0) {
            filteredMon = filteredMon.filter(deal =>
                dealTypes.some(dt => deal.dealType?.toLowerCase().includes(dt.toLowerCase()))
            );
            filteredTue = filteredTue.filter(deal =>
                dealTypes.some(dt => deal.dealType?.toLowerCase().includes(dt.toLowerCase()))
            );
            filteredWed = filteredWed.filter(deal =>
                dealTypes.some(dt => deal.dealType?.toLowerCase().includes(dt.toLowerCase()))
            );
            filteredThu = filteredThu.filter(deal =>
                dealTypes.some(dt => deal.dealType?.toLowerCase().includes(dt.toLowerCase()))
            );
            filteredFri = filteredFri.filter(deal =>
                dealTypes.some(dt => deal.dealType?.toLowerCase().includes(dt.toLowerCase()))
            );
            filteredSat = filteredSat.filter(deal =>
                dealTypes.some(dt => deal.dealType?.toLowerCase().includes(dt.toLowerCase()))
            );
            filteredSun = filteredSun.filter(deal =>
                dealTypes.some(dt => deal.dealType?.toLowerCase().includes(dt.toLowerCase()))
            );
        }

        // Filter by cityName
        if (cityName !== '') {
            filteredMon = filteredMon.filter(deal =>
                deal.dealCity?.toLowerCase().includes(cityName.toLowerCase())
            );
            filteredTue = filteredTue.filter(deal =>
                deal.dealCity?.toLowerCase().includes(cityName.toLowerCase())
            );
            filteredWed = filteredWed.filter(deal =>
                deal.dealCity?.toLowerCase().includes(cityName.toLowerCase())
            );
            filteredThu = filteredThu.filter(deal =>
                deal.dealCity?.toLowerCase().includes(cityName.toLowerCase())
            );
            filteredFri = filteredFri.filter(deal =>
                deal.dealCity?.toLowerCase().includes(cityName.toLowerCase())
            );
            filteredSat = filteredSat.filter(deal =>
                deal.dealCity?.toLowerCase().includes(cityName.toLowerCase())
            );
            filteredSun = filteredSun.filter(deal =>
                deal.dealCity?.toLowerCase().includes(cityName.toLowerCase())
            );
        }

        // Filter by "None" school
        if (school === "None") {
            filteredMon = filteredMon.filter(deal => !deal.school);
            filteredTue = filteredTue.filter(deal => !deal.school);
            filteredWed = filteredWed.filter(deal => !deal.school);
            filteredThu = filteredThu.filter(deal => !deal.school);
            filteredFri = filteredFri.filter(deal => !deal.school);
            filteredSat = filteredSat.filter(deal => !deal.school);
            filteredSun = filteredSun.filter(deal => !deal.school);
        }

        // 6) Finally, update your weekday states
        setMonDeals(filteredMon);
        setTueDeals(filteredTue);
        setWedDeals(filteredWed);
        setThuDeals(filteredThu);
        setFriDeals(filteredFri);
        setSatDeals(filteredSat);
        setSunDeals(filteredSun);

    }, [initialArrayDeal, cityName, dealTypes, school]);

    // Now handle the searching
    useEffect(() => {
        // if deals
        if (eventCategory === "deals") {
            let filtered = [...initialArrayDeal];

            if (searchQuery) {
                filtered = filtered.filter((d) =>
                    d.dealName?.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }
            if (date) {
                const dt = parseISO(date);
                filtered = filtered.filter((d) => {
                    if (!d.dealDate) return false;
                    const dd = parseISO(d.dealDate);
                    return (
                        dd.getFullYear() === dt.getFullYear() &&
                        dd.getMonth() === dt.getMonth() &&
                        dd.getDate() === dt.getDate()
                    );
                });
            }
            if (dealTypes.length > 0) {
                filtered = filtered.filter((d) =>
                    dealTypes.some((t) => d.dealType?.toLowerCase().includes(t.toLowerCase()))
                );
            }
            if (school) {
                if (school === "None") {
                    filtered = filtered.filter((dl) => !dl.school);
                } else {
                    filtered = filtered.filter((dl) => dl.school === school);
                }
            }
            if (cityName) {
                filtered = filtered.filter((dl) =>
                    dl.dealCity?.toLowerCase().includes(cityName.toLowerCase())
                );
            }
            if (organization) {
                filtered = filtered.filter(
                    (dl) =>
                        dl.dealOrganization?.toLowerCase().includes(organization.toLowerCase()) ||
                        dl.dealUsername?.toLowerCase().includes(organization.toLowerCase())
                );
            }
            setDealArray(filtered);
        } else {
            // events
            let filtered = [...initialArray];

            if (searchQuery) {
                filtered = filtered.filter((e) =>
                    e.eventName?.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }
            if (date) {
                filtered = filtered.filter((e) => e.eventDate === date);
            }
            if (eventTypes.length > 0) {
                filtered = filtered.filter((e) =>
                    eventTypes.some((t) => e.eventType?.toLowerCase().includes(t.toLowerCase()))
                );
            }
            if (school) {
                if (school === "None") {
                    filtered = filtered.filter((ev) => !ev.school);
                } else {
                    filtered = filtered.filter((ev) => ev.school === school);
                }
            }
            if (cityName) {
                filtered = filtered.filter((ev) =>
                    ev.eventCity?.toLowerCase().includes(cityName.toLowerCase())
                );
            }
            if (organization) {
                filtered = filtered.filter(
                    (ev) =>
                        ev.eventOrganization?.toLowerCase().includes(organization.toLowerCase()) ||
                        ev.eventUsername?.toLowerCase().includes(organization.toLowerCase())
                );
            }
            setEventArray(filtered);
        }
    }, [searchQuery, date, eventTypes, dealTypes, school, cityName, organization, eventCategory, initialArray, initialArrayDeal]);

    // Basic UI actions
    const navigate = useNavigate();
    const backArrowPress = () => navigate("/");
    const onMyProfilePress = () => {
        if (!authenticatedUser || !emailVerified) {
            setRequireAccountModal(true);
            return;
        }
        navigate(`/profile/${myUsername}/${userID}`);
    };
    const onListEventPress = () => {
        if (!authenticatedUser || !emailVerified) {
            setRequireAccountModal(true);
            return;
        }
        navigate("/listexphomepage/false");
    };
    const hivePassButtonPress = () => {
        navigate("/hivePass");
    };

    const onEventProfilePress = (id) => {
        // if (!id) return;
        // if (eventCategory === "deals") {
        //     navigate(`/dealProfile/${id}/Search/None`);
        // } else {
        //     navigate(`/eventProfile/${id}/Search/None`);
        // }
        window.open('https://tr.ee/Pq1rXt6VOQ', '_blank', 'noopener,noreferrer');
    };
    const onProfileUsernamePress = (username, userId) => {
        // if (!username || !userId) return;
        // navigate(`/profile/${username}/${userId}`);
        window.open('https://tr.ee/Pq1rXt6VOQ', '_blank', 'noopener,noreferrer');
    };

    // Quick picks
    const handleQuickPick = (label) => {
        if (eventCategory === "deals") {
            setDealTypes([label]);
        } else {
            setEventTypes([label]);
        }
        setIsFocused(true);
    };

    // handle focus
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handleFilterButton = () => {
        setIsFocused(true);
        setModalVisible(true);
    };

    const resetFilters = () => {
        setEventArray([...initialArray]);
        setDealArray([...initialArrayDeal]);
        setDate("");
        setEventTypes([]);
        setDealTypes([]);
        setSchool("");
        setSearchQuery("");
        setCityName("");
        setOrganization("");
        setModalVisible(false);
    };

    const setEventCategoryDeals = () => setEventCategory("deals");
    const setEventCategoryEvents = () => setEventCategory("allEvents");

    const calendarDateChange = (pickedDate) => {
        setCalendarComponent(false);
        if (!isValid(pickedDate)) return;
        const formatted = format(pickedDate, "yyyy-MM-dd");
        setDate(formatted);
    };

    // School options
    const categorizedSchoolOptions = {
        Universities: [
            "University of Windsor",
            "TMU",
            "York University",
            "University of Ontario",
            "McMaster University",
            "Western University",
            "Guelph University",
            "Queen's University",
            "University of Waterloo",
            "Laurier University",
            "University of Toronto",
            "McGill University",
        ],
        Colleges: ["St Clair College", "Centennial College"],
    };
    const [searchSchoolTerm, setSearchSchoolTerm] = useState("");

    // Event/Deal type options
    const eventTypeOptions = [
        { category: "Social & Cultural Events", options: ["Festivals", "Markets", "Gala & Fundraisers", "Meet & Greet", "Performances & Screenings", "Art & Culture", "Attractions", "Trade Shows & Fairs"] },
        { category: "Entertainment & Nightlife", options: ["Music & Concerts", "Club Nights", "Themed Party", "Wine Tasting", "Car Shows"] },
        { category: "Educational Events", options: ["Workshop/Seminar", "Networking Event", "Business Conference", "Science & Tech", "General School Events"] },
        { category: "Sports & Fitness", options: ["Sports & Fitness Events"] },
        { category: "Other", options: ["Other"] },
    ];
    const dealTypeOptions = [
        { category: "Nightlife & Social Gatherings", options: ["Recurring Club Nights", "Drink Specials", "Cover Discounts", "VIP Access", "Happy Hour"] },
        { category: "Food & Retail", options: ["Restaurant Discounts", "Storewide Sales", "Seasonal Promotions", "Bake Sale"] },
        { category: "Student Exclusives", options: ["Campus Deals", "Student Discount", "Subscription & Streaming"] },
        { category: "Entertainment & Leisure", options: ["Activity & Adventure", "Movies & Arcades", "Concerts & Live Shows", "Museums & Theatres"] },
        { category: "Health & Wellness", options: ["Fitness Classes", "Gym Memberships", "Spa & Salon Offers", "Mental Health Services", "Nutrition & Supplements"] },
        { category: "Travel & Hospitality", options: ["Hotel Promotions", "Flight Discounts", "Tour Packages", "Study Abroad Offers", "Hostel & Local Adventures"] },
        { category: "Other", options: ["Other"] },
    ];
    const onTypeSelect = async (typeOption) => {
        if (eventCategory === 'deals') {
            setDealTypes((prev) => {
                return prev.includes(typeOption)
                    ? prev.filter((t) => t !== typeOption)
                    : [...prev, typeOption];
            });
        } else {
            setEventTypes((prev) => {
                return prev.includes(typeOption)
                    ? prev.filter((t) => t !== typeOption)
                    : [...prev, typeOption];
            });
        }
    };

    return (
        <div className="search-page-container">
            {requireAccountModal && (
                <div className="modal-overlay" onClick={() => setRequireAccountModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Join HiveExp to Explore More!</h2>
                        <p>Create an account now to unlock all features.</p>
                        <div className="buttons-row">
                            <button onClick={() => setRequireAccountModal(false)}>Close</button>
                            <button onClick={() => navigate("/login")}>Login / Sign Up</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="search-top-section">
                <div className="search-top-bar">
                    <h2>Search</h2>
                    <button className="reset-button" onClick={resetFilters}>Reset</button>
                </div>

                <div className="search-bar-row">
                    {isFocused && (
                        <button className="back-arrow-btn" onClick={handleBlur}>
                            <FaArrowLeft className="icon-style" />
                        </button>
                    )}
                    <input
                        className="search-input"
                        placeholder={eventCategory === "deals" ? "Search for Deal" : "Search for Event"}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={handleFocus}
                    />
                    <button className="filter-btn" onClick={handleFilterButton}>
                        <FaFilter className="icon-style2" />
                    </button>
                </div>

                <div className="filter-chips">
                    <button className="filter-btn-top" onClick={handleFilterButton}>{cityName || "City"}</button>
                    <button className="filter-btn-top" onClick={() => {
                        setSchoolModalVisible(true);
                        setIsFocused(true);
                    }}>{school || "School"}</button>
                    <button className="filter-btn-top" onClick={() => {
                        setEventTypeModalVisible(true);
                        setIsFocused(true);
                    }}>
                        {eventCategory === "deals"
                            ? dealTypes.length ? dealTypes.join(", ") : "Deal Type"
                            : eventTypes.length ? eventTypes.join(", ") : "Event Type"}
                    </button>
                    <button className="filter-btn-top" onClick={() => {
                        setCalendarComponent(true);
                        setIsFocused(true);
                    }}>{date || "Date"}</button>
                </div>

                <div className="toggle-row">
                    <button
                        className={`toggle-option ${eventCategory === "deals" ? "selected" : ""}`}
                        onClick={setEventCategoryDeals}
                    >
                        Deals
                    </button>
                    <button
                        className={`toggle-option ${eventCategory !== "deals" ? "selected" : ""}`}
                        onClick={setEventCategoryEvents}
                    >
                        Events
                    </button>
                </div>
            </div>

            {!isFocused && (
                <div className="browse-container">
                    <h3>Start Browsing</h3>
                    <div className="quick-box-grid">
                        {(eventCategory === "deals" ? QUICK_DEAL_TYPES : QUICK_EVENT_TYPES).map((item, idx) => {
                            const gradientStyle = {
                                background: `linear-gradient(45deg, ${item.colors[0]}, ${item.colors[1]})`
                            };

                            return (
                                <button
                                    key={idx}
                                    className="quick-box"
                                    style={gradientStyle}
                                    onClick={() => handleQuickPick(item.label)}
                                >
                                    {/* Render the icon */}
                                    {item.icon}
                                    {/* Render the label */}
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}



            {/* RESULTS AREA */}
            <div className="results-area">
                {isLoading && <p style={{ color: "#fff" }}>Loading...</p>}

                {/* If not focused, show your categories for events or deals */}
                {!isFocused && eventCategory !== "deals" && (
                    <div>
                        {/* Featured */}
                        {featuredEvents.length > 0 && (
                            <div>
                                <h3>Featured Events</h3>
                                <PrintCardsVerticalSmall
                                    events={featuredEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Todays Events */}
                        {todaysEvents.length > 0 && (
                            <div>
                                <h3>What's Happening Today</h3>
                                <PrintCardsVerticalSmall
                                    events={todaysEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* This Week */}
                        {thisWeekEvents.length > 0 && (
                            <div>
                                <h3>This Week</h3>
                                <PrintCardsVerticalSmall
                                    events={thisWeekEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* City-based */}
                        {cityEvents.length > 0 && (
                            <div>
                                <h3>Location: {cityName}</h3>
                                <PrintCardsVerticalSmall
                                    events={cityEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* School-based */}
                        {schoolEvents.length > 0 && (
                            <div>
                                <h3>{school} Events</h3>
                                <PrintCardsVerticalSmall
                                    events={schoolEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Social & Cultural */}
                        {socialEvents.length > 0 && (
                            <div>
                                <h3>Social & Cultural Events</h3>
                                <PrintCardsVerticalSmall
                                    events={socialEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Entertainment & Nightlife */}
                        {entertainmentEvents.length > 0 && (
                            <div>
                                <h3>Entertainment & Nightlife</h3>
                                <PrintCardsVerticalSmall
                                    events={entertainmentEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Educational */}
                        {educationalEvents.length > 0 && (
                            <div>
                                <h3>Educational Events</h3>
                                <PrintCardsVerticalSmall
                                    events={educationalEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Sports */}
                        {sportsEvents.length > 0 && (
                            <div>
                                <h3>Sports & Fitness Events</h3>
                                <PrintCardsVerticalSmall
                                    events={sportsEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Other */}
                        {otherEvents.length > 0 && (
                            <div>
                                <h3>Other Events</h3>
                                <PrintCardsVerticalSmall
                                    events={otherEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Default Toronto */}
                        {torontoEvents.length > 0 && cityEvents.length === 0 && (
                            <div>
                                <h3>Location: Toronto</h3>
                                <PrintCardsVerticalSmall
                                    events={torontoEvents}
                                    onEventProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* If we truly have no events at all */}
                        {eventArray.length === 0 &&
                            featuredEvents.length === 0 &&
                            todaysEvents.length === 0 &&
                            thisWeekEvents.length === 0 &&
                            cityEvents.length === 0 &&
                            schoolEvents.length === 0 &&
                            socialEvents.length === 0 &&
                            entertainmentEvents.length === 0 &&
                            educationalEvents.length === 0 &&
                            sportsEvents.length === 0 &&
                            otherEvents.length === 0 &&
                            torontoEvents.length === 0 && (
                                <div>
                                    <h3>No Results Found</h3>
                                </div>
                            )}
                    </div>
                )}

                {!isFocused && eventCategory === "deals" && (
                    <div>
                        {/* Monday Deals */}
                        {monDeals.length > 0 && (
                            <div>
                                <h3>Monday Deals</h3>
                                <PrintCardsVerticalSmallDeal
                                    deals={monDeals}
                                    onDealProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Tuesday Deals */}
                        {tueDeals.length > 0 && (
                            <div>
                                <h3>Tuesday Deals</h3>
                                <PrintCardsVerticalSmallDeal
                                    deals={tueDeals}
                                    onDealProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Wednesday Deals */}
                        {wedDeals.length > 0 && (
                            <div>
                                <h3>Wednesday Deals</h3>
                                <PrintCardsVerticalSmallDeal
                                    deals={wedDeals}
                                    onDealProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Thursday Deals */}
                        {thuDeals.length > 0 && (
                            <div>
                                <h3>Thursday Deals</h3>
                                <PrintCardsVerticalSmallDeal
                                    deals={thuDeals}
                                    onDealProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Friday Deals */}
                        {friDeals.length > 0 && (
                            <div>
                                <h3>Friday Deals</h3>
                                <PrintCardsVerticalSmallDeal
                                    deals={friDeals}
                                    onDealProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Saturday Deals */}
                        {satDeals.length > 0 && (
                            <div>
                                <h3>Saturday Deals</h3>
                                <PrintCardsVerticalSmallDeal
                                    deals={satDeals}
                                    onDealProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* Sunday Deals */}
                        {sunDeals.length > 0 && (
                            <div>
                                <h3>Sunday Deals</h3>
                                <PrintCardsVerticalSmallDeal
                                    deals={sunDeals}
                                    onDealProfilePress={onEventProfilePress}
                                    onProfileUsernamePress={onProfileUsernamePress}
                                    showMore={true}
                                />
                            </div>
                        )}

                        {/* If all are empty */}
                        {monDeals.length === 0 &&
                            tueDeals.length === 0 &&
                            wedDeals.length === 0 &&
                            thuDeals.length === 0 &&
                            friDeals.length === 0 &&
                            satDeals.length === 0 &&
                            sunDeals.length === 0 && (
                                <div>
                                    <h3>No Deals Found</h3>
                                </div>
                            )}
                    </div>
                )}


                {/* If isFocused => show the filtered array */}
                {isFocused && eventCategory === "deals" && (
                    <div>
                        <h3>Search Deals</h3>
                        {dealArray.length === 0 && <p>No Results Found</p>}
                        <PrintCardsVerticalSmallDeal
                            deals={dealArray}
                            onDealProfilePress={onEventProfilePress}
                            onProfileUsernamePress={onProfileUsernamePress}
                            showMore={false}
                        />
                    </div>
                )}

                {isFocused && eventCategory !== "deals" && (
                    <div>
                        <h3>Search Events</h3>
                        {eventArray.length === 0 && <p>No Results Found</p>}
                        <PrintCardsVerticalSmall
                            events={eventArray}
                            onEventProfilePress={onEventProfilePress}
                            onProfileUsernamePress={onProfileUsernamePress}
                            showMore={false}
                        />
                    </div>
                )}
            </div>

            {/* MAIN FILTER MODAL */}
            {modalVisible && (
                <div
                    className="filterModalOverlay"
                    onClick={() => setModalVisible(false)}
                >
                    {/* Prevent clicks inside from closing modal */}
                    <div
                        className="filterModalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="filterModalTitle">Customize Experience</h2>

                        {/* (No “Search By” field in web, so skip that) */}

                        {/* 1) Event/Deal Type */}
                        <div className="filterModalInputWrapper">
                            <input
                                type="text"
                                readOnly
                                placeholder={
                                    eventCategory === "deals"
                                        ? "Select Deal Type:"
                                        : "Select Event Type:"
                                }
                                value={
                                    eventCategory === "deals"
                                        ? dealTypes.join(", ")
                                        : eventTypes.join(", ")
                                }
                                onClick={() => {
                                    setEventTypeModalVisible(true);
                                    // setModalVisible(false);
                                }}
                                className="filterModalInput"
                            />
                        </div>

                        <div className="filterModalButtonWrapper">
                            <button
                                onClick={() => {
                                    setEventTypeModalVisible(true);
                                    // setModalVisible(false);
                                }}
                                className="filterModalButton"
                            >
                                {eventCategory === "deals"
                                    ? "Open List of Deal Types"
                                    : "Open List of Event Types"}
                            </button>
                        </div>

                        {/* 2) School */}
                        <div className="filterModalInputWrapper">
                            <input
                                type="text"
                                readOnly
                                placeholder="Select School"
                                value={school}
                                onClick={() => {
                                    setSchoolModalVisible(true);
                                    // setModalVisible(false);
                                }}
                                className="filterModalInput"
                            />
                        </div>

                        <div className="filterModalButtonWrapper">
                            <button
                                onClick={() => {
                                    setSchoolModalVisible(true);
                                    // setModalVisible(false);
                                }}
                                className="filterModalButton"
                            >
                                Open List of Schools
                            </button>
                        </div>

                        {/* 3) City */}
                        <div className="filterModalInputWrapper">
                            <input
                                type="text"
                                placeholder="City:"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                                className="filterModalInput"
                            />
                        </div>

                        {/* 4) Organization */}
                        <div className="filterModalInputWrapper">
                            <input
                                type="text"
                                placeholder="Organization:"
                                value={organization}
                                onChange={(e) => setOrganization(e.target.value)}
                                className="filterModalInput"
                            />
                        </div>

                        {/* 5) Date */}
                        <div className="filterModalInputWrapper">
                            <input
                                type="text"
                                placeholder={
                                    eventCategory === "deals" ? "Deal Date:" : "Event Date:"
                                }
                                readOnly
                                value={date}
                                onClick={() => setCalendarComponent(true)}
                                className="filterModalInput"
                            />
                        </div>

                        <div className="filterModalButtonWrapper">
                            <button
                                onClick={() => setCalendarComponent(true)}
                                className="filterModalButton"
                            >
                                Open Calendar
                            </button>
                        </div>

                        {/* Bottom row: Close & Reset */}
                        <div className="filterModalCloseResetRow">
                            <button
                                onClick={() => setModalVisible(false)}
                                className="filterModalButtonSmall"
                            >
                                Close
                            </button>
                            <button
                                onClick={resetFilters}
                                className="filterModalButtonSmall"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            )}



            {/* EVENT TYPE MODAL */}
            {eventTypeModalVisible && (
                <div
                    className="typeModalOverlay"
                    onClick={() => setEventTypeModalVisible(false)}
                >
                    {/* Prevent clicks inside from closing modal */}
                    <div
                        className="typeModalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="typeModalTitle">
                            {eventCategory === "deals" ? "Select Deal Types" : "Select Event Types"}
                        </h3>

                        <div className="typeScrollContainer">
                            {(eventCategory === "deals" ? dealTypeOptions : eventTypeOptions).map((cat, idx) => (
                                <div key={idx} className="typeCategoryBlock">
                                    <h4 className="typeCategoryHeader">{cat.category}</h4>
                                    <div className="typeOptionContainer">
                                        {cat.options.map((opt) => {
                                            const isSelected =
                                                eventCategory === "deals"
                                                    ? dealTypes.includes(opt)
                                                    : eventTypes.includes(opt);

                                            return (
                                                <button
                                                    key={opt}
                                                    onClick={() => onTypeSelect(opt)}
                                                    className={`typeOptionButton ${isSelected ? "typeOptionSelected" : ""}`}
                                                >
                                                    {opt}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Close button at the bottom */}
                        <button
                            className="typeCloseButton"
                            onClick={() => {
                                setEventTypeModalVisible(false);
                                // If you want to reopen main filter after closing this:
                                // if (!customizeExperienceFromHome) setModalVisible(true);
                                // setCustomizeExperienceVisibleFromHome(false);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {schoolModalVisible && (
                <div
                    className="schoolModalOverlay"
                    onClick={() => setSchoolModalVisible(false)}
                >
                    {/* Prevent clicks inside from closing the modal */}
                    <div
                        className="schoolModalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="schoolModalTitle">Select School</h3>

                        {/* Search bar */}
                        <div className="schoolInputWrapper">
                            <input
                                type="text"
                                className="schoolSearchInput"
                                placeholder="Search for school..."
                                value={searchSchoolTerm}
                                onChange={(e) => setSearchSchoolTerm(e.target.value)}
                            />
                        </div>

                        {/* Hide School Events button */}
                        <div className="schoolButtonWrapper">
                            <button
                                className="schoolHideButton"
                                onClick={() => {
                                    setSchool("None");
                                    setSchoolModalVisible(false);
                                    setModalVisible(true);
                                }}
                            >
                                Hide School Events
                            </button>
                        </div>

                        {/* Scrollable area for Universities / Colleges */}
                        <div className="schoolScrollContainer">
                            {Object.keys(categorizedSchoolOptions).map((cat) => (
                                <div key={cat} className="schoolCategoryBlock">
                                    <h4 className="schoolCategoryHeader">{cat}</h4>
                                    <div className="schoolOptionContainer">
                                        {categorizedSchoolOptions[cat]
                                            .filter((s) =>
                                                s.toLowerCase().includes(searchSchoolTerm.toLowerCase())
                                            )
                                            .map((schoolOpt) => {
                                                const isSelected = schoolOpt === school;
                                                return (
                                                    <button
                                                        key={schoolOpt}
                                                        className={`schoolOptionButton ${isSelected ? "schoolOptionSelected" : ""
                                                            }`}
                                                        onClick={() => {
                                                            setSchool(schoolOpt);
                                                            setSchoolModalVisible(false);
                                                            setModalVisible(true);
                                                        }}
                                                    >
                                                        {schoolOpt}
                                                    </button>
                                                );
                                            })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Close button at the bottom */}
                        <button
                            className="schoolCloseButton"
                            onClick={() => {
                                setSchoolModalVisible(false);
                                // setModalVisible(true);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}


            {/* CALENDAR MODAL */}
            {calendarComponent && (
                <div
                    className="calendarModalOverlay"
                    onClick={() => setCalendarComponent(false)}
                >
                    <div
                        className="calendarModalContent"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="calendarModalTitle">Select a Date</h3>

                        <div className="calendarInputWrapper">
                            <input
                                type="date"
                                className="calendarDateInput"
                                onChange={e => {
                                    if (e.target.value) setDate(e.target.value)
                                }}
                            />
                        </div>

                        <button
                            className="calendarCloseButton"
                            onClick={() => setCalendarComponent(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}



        </div>
    );
}

export default Search;
