"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigitalcn/uikit/card";
import Progress from "@mdigitalcn/uikit/progress";
import Badge from "@mdigitalcn/uikit/badge";
import { cn } from "@mdigitalcn/uikit";
import type { GoalTrackerProps } from "./GoalTracker.types";

const statusColor: Record<string, string> = { "on-track": "success", "at-risk": "warning", behind: "error", completed: "primary" };

export default function GoalTracker({ goals, onGoalClick, className }: GoalTrackerProps) {
  return (
    <Card className={className}><CardHeader><CardTitle className="text-sm font-medium">Goals</CardTitle></CardHeader>
      <CardContent className="space-y-4">{goals.map((g) => (
        <div key={g.id} className={cn(onGoalClick && "cursor-pointer")} onClick={() => onGoalClick?.(g.id)}>
          <div className="flex items-center justify-between mb-1"><span className="text-sm font-medium">{g.title}</span>
            {g.status && <Badge color={statusColor[g.status] as any} variant="soft" size="sm">{g.status}</Badge>}</div>
          <Progress value={g.progress} className="h-2" />
          <div className="flex justify-between mt-1 text-xs text-text-secondary"><span>{g.progress}%</span>{g.dueDate && <span>Due: {g.dueDate}</span>}</div>
        </div>
      ))}</CardContent>
    </Card>
  );
}
