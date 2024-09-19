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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Button className="w-full">
            <FileText className="mr-2 h-4 w-4" />
            Monthly Report
          </Button>
          <Button className="w-full">
            <FileText className="mr-2 h-4 w-4" />
            Quarterly Report
          </Button>
          <Button className="w-full sm:col-span-2">
            <FileText className="mr-2 h-4 w-4" />
            Custom Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
