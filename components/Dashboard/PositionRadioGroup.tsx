import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Position } from "@/lib/types";

interface PositionRadioGroupProps {
  value: Position;
  onChange: (value: Position) => void;
}

const PositionRadioGroup: React.FC<PositionRadioGroupProps> = ({
  value,
  onChange,
}) => (
  <div>
    <Label>Position</Label>
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="grid grid-cols-2 gap-2"
    >
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
        <div key={pos} className="flex items-center space-x-2">
          <RadioGroupItem value={pos} id={pos} />
          <Label htmlFor={pos}>
            {pos.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

export default PositionRadioGroup;
