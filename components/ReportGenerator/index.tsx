import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function ReportGenerator(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Reports</CardTitle>
        <CardDescription>
          Create custom reports based on feedback data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 items-center">
          <Button className="w-full sm:w-auto">
            <FileText className="mr-2 h-4 w-4" />
            Generate Monthly Report
          </Button>
          <Button className="w-full sm:w-auto">
            <FileText className="mr-2 h-4 w-4" />
            Generate Quarterly Report
          </Button>
          <Button className="w-full sm:w-auto">
            <FileText className="mr-2 h-4 w-4" />
            Generate Custom Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
