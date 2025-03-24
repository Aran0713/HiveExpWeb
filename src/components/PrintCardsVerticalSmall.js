// src/components/PrintCardsVerticalSmall.js

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
// Example fallback image if the event has no image
import fallbackLogo from "../../src/HiveLogo.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt, FaSyncAlt } from "react-icons/fa";



function PrintCardsVerticalSmall({ events, onEventProfilePress, onProfileUsernamePress, showMore }) {
    const [expanded, setExpanded] = useState(false);

    const displayedEvents = showMore && !expanded ? events.slice(0, 3) : events;

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div style={styles.eventsList}>
                {displayedEvents.map((event, idx) => (
                    <div
                        key={idx}
                        onClick={() => onEventProfilePress(event.eventID || "")}
                        style={styles.eventCard}
                    >
                        <div style={styles.eventImageContainer}>
                            <img
                                alt="Event"
                                src={event.image || fallbackLogo}
                                style={styles.eventImage}
                            />
                        </div>

                        <div style={styles.eventDetails}>
                            <div style={styles.eventTitle}>{event.eventName}</div>

                            <div
                                style={styles.eventOrganization}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onProfileUsernamePress(event.eventUsername || "", event.eventUserID || "");
                                }}
                            >
                                Presented by: {event.eventOrganization}
                            </div>

                            <div style={styles.eventDateContainer}>
                                <FaRegCalendarAlt className="deal-icon" style={styles.icon} />
                                <span style={styles.eventDate}>
                                    {event.eventDate ? format(parseISO(event.eventDate), "EEE, MMM d") : ""}
                                </span>
                            </div>

                            <div style={styles.eventLocationContainer}>
                                <IoLocationOutline style={styles.icon2} />
                                <span style={styles.eventLocation}>
                                    {event.eventCity && event.eventCountry
                                        ? `${event.eventCity}, ${event.eventCountry}`
                                        : ""}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showMore && events.length > 3 && (
                <button onClick={toggleExpanded} style={styles.showMoreLessButton}>
                    {expanded ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}

const styles = {
    eventsList: {
        display: "flex",
        flexDirection: "column",
    },
    eventCard: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        margin: 10,
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        width: "95%",
        // height: 120,
        cursor: "pointer",
    },
    eventImageContainer: {
        width: 100,
        height: 100,
        backgroundColor: "#f0f0f0",
        margin: 10,
        flexShrink: 0,
    },
    eventImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    eventDetails: {
        flex: 1,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#DAA520", // gold color
        marginBottom: 4,
        // maxWidth: "90%",
        display: "-webkit-box",         // Enables the flex-like box for line-clamping
        WebkitLineClamp: 2,             // Number of lines before clamping
        WebkitBoxOrient: "vertical",    // Vertical flow
        overflow: "hidden",             // Must hide the overflow
        textOverflow: "ellipsis",
    },
    eventOrganization: {
        fontSize: 12,
        color: "#666",
        marginBottom: 4,
        cursor: "pointer",
        width: "85%",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    eventDateContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 2,
    },
    eventDate: {
        color: "black",
        fontSize: 12,
    },
    eventLocationContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 2,
    },
    eventLocation: {
        color: "black",
        fontSize: 12,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    showMoreLessButton: {
        display: "block",
        margin: "0 auto 20px",
        padding: "6px 12px",
        backgroundColor: "transparent",
        color: "#DAA520",
        border: "1px solid #DAA520",
        borderRadius: 4,
        cursor: "pointer",
    },
    icon: {
        fontSize: "13px",
        color: "black",
        marginRight: "5px",
    },
    icon2: {
        fontSize: "16px",
        color: "black",
        marginRight: "5px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "-2px",
    },
    icon3: {
        fontSize: "11px",
        color: "black",
        marginRight: "8px",
        marginLeft: "1px",

    },
};

export default PrintCardsVerticalSmall;
