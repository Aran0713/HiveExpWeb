// src/components/PrintCardsVerticalSmallDeal.js

import React, { useState } from "react";
import { format, max, parseISO } from "date-fns";
import fallbackLogo from "../../src/HiveLogo.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt, FaSyncAlt } from "react-icons/fa";



function PrintCardsVerticalSmallDeal({ deals, onDealProfilePress, onProfileUsernamePress, showMore }) {
    const [expanded, setExpanded] = useState(false);

    const displayedDeals = showMore && !expanded ? deals.slice(0, 3) : deals;

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <div>
            <div style={styles.dealsList}>
                {displayedDeals.map((deal, idx) => (
                    <div
                        key={idx}
                        onClick={() => onDealProfilePress(deal.dealID || "")}
                        style={styles.dealCard}
                    >
                        <div style={styles.dealImageContainer}>
                            <img
                                alt="Deal"
                                src={deal.image || fallbackLogo}
                                style={styles.dealImage}
                            />
                        </div>

                        <div style={styles.dealDetails}>
                            <div style={styles.dealTitle}>{deal.dealName}</div>

                            <div
                                style={styles.dealOrganization}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onProfileUsernamePress(deal.dealUsername || "", deal.dealUserID || "");
                                }}
                            >
                                Presented by: {deal.dealOrganization}
                            </div>

                            <div style={styles.dealDateContainer}>
                                <FaRegCalendarAlt className="deal-icon" style={styles.icon} />
                                <span style={styles.dealDate}>
                                    {deal.dealDate ? format(parseISO(deal.dealDate), "EEE, MMM d") : ""}
                                </span>
                            </div>

                            <div style={styles.dealLocationContainer}>
                                <IoLocationOutline style={styles.icon2} />
                                <span style={styles.dealLocation}>
                                    {deal.dealCity && deal.dealCountry
                                        ? `${deal.dealCity}, ${deal.dealCountry}`
                                        : ""}
                                </span>
                            </div>

                            {deal.recurrenceType && deal.recurrenceType !== "ONCE" && (
                                <div style={styles.recurrenceTypeContainer}>
                                    <FaSyncAlt className="deal-icon" style={styles.icon3} />
                                    <span style={styles.dealRecurrence}>
                                        {deal.recurrenceType}
                                        {deal.recurrenceType === "WEEKLY" && deal.daysOfWeek?.length
                                            ? ` - ${deal.daysOfWeek.join(", ")}`
                                            : ""}
                                        {deal.recurrenceType === "MONTHLY" && deal.dayOfMonth?.length
                                            ? ` - ${deal.dayOfMonth.join(", ")}`
                                            : ""}
                                        {deal.recurrenceType === "YEARLY" && deal.dayOfYear?.length
                                            ? ` - ${deal.dayOfYear.join(", ")}`
                                            : ""}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {showMore && deals.length > 3 && (
                <button onClick={toggleExpanded} style={styles.showMoreLessButton}>
                    {expanded ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}

const styles = {
    dealsList: {
        display: "flex",
        flexDirection: "column",
    },
    dealCard: {
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
    dealImageContainer: {
        width: 100,
        height: 100,
        backgroundColor: "#f0f0f0",
        margin: 10,
        flexShrink: 0,
    },
    dealImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    dealDetails: {
        flex: 1,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: 0,
    },
    dealTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#DAA520",
        marginBottom: 4,
        // width: "100%",
        // maxWidth: "100%",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    dealOrganization: {
        fontSize: 12,
        color: "#666",
        marginBottom: 4,
        cursor: "pointer",
    },
    dealDateContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 2,
    },
    dealDate: {
        color: "black",
        fontSize: 12,
    },
    dealLocationContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 2,
    },
    dealLocation: {
        color: "black",
        fontSize: 12,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    recurrenceTypeContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 2,
    },
    dealRecurrence: {
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

export default PrintCardsVerticalSmallDeal;
