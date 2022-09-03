import { StyledClock } from "./styled";
import { formatDate, useCurrentDate } from "./useLocalCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            {formatDate(date)}
        </StyledClock>
    );
};

export default Clock;