import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ConfigInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const ConfigInput: React.FC<ConfigInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
}) => (
  <div>
    <Label htmlFor={label.toLowerCase().replace(" ", "-")}>{label}</Label>
    <Input
      id={label.toLowerCase().replace(" ", "-")}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default ConfigInput;
