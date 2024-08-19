import React from "react";
import { ContainerBadge, ContainerBadgeText } from "./styles";

interface IBadgeProps {
  count: number;
}
const Badge = ({ count }: IBadgeProps) => {
  return count > 0 ? (
    <ContainerBadge>
      <ContainerBadgeText>{count}</ContainerBadgeText>
    </ContainerBadge>
  ) : (
    <></>
  );
};

export default Badge;
