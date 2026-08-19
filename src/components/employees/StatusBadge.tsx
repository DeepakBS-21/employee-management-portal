interface StatusBadgeProps{
    status: "Active" | "Inactive";
}

function StatusBadge({ status } : StatusBadgeProps) {
    const isActive = status === "Active";

    return (
        <span 
            className= {`
                inline-flex
                rounded-full
                px-2.5
                py-1
                text-xs
                font-semibold
                ${
                    isActive
                    ?   "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }
             `}
            > 
            {status}
        </span>
    );
}

export default StatusBadge;