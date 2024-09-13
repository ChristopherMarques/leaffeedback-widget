"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, BarChart, FileText, Settings } from "lucide-react";
import ConfigTab from "@/components/ConfigTab";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function DashboardPage(): JSX.Element {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback Dashboard</h1>
      <Tabs defaultValue="feedbacks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="feedbacks" className="flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Feedbacks
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center">
            <BarChart className="mr-2 h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Reports
          </TabsTrigger>
          <TabsTrigger value="config" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            Config
          </TabsTrigger>
        </TabsList>
        <Dashboard />
        <TabsContent value="config">
          <ConfigTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
