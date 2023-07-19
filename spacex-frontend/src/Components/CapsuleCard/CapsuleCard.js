import { StyledCapsuleCard } from "./CapsuleCard.styles";

export const CapsuleCard = ({ item }) => {
  return (
    <StyledCapsuleCard>
      <div>
        <label>Serial: </label>
        <span>{item?.capsule_serial}</span>
      </div>
      <div>
        <label>Details: </label>
        <span>{item?.details}</span>
      </div>
      <div>
        <label>Launch Date: </label>
        <span>
          {`${new Date(item?.original_launch).getDate()}/${new Date(
            item?.original_launch
          ).getMonth()}/${new Date(item?.original_launch).getFullYear()}
          `}
        </span>
      </div>
      <div>
        <label>Status: </label>
        <span>{item?.status}</span>
      </div>{" "}
      <div>
        <label>Type: </label>
        <span>{item?.type}</span>
      </div>
    </StyledCapsuleCard>
  );
};
