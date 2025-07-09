'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/shared/ui";
import { skillsData } from "../data/skills-data";
import SkillsList from "./SkillsList";
import { useState } from "react";
function SkillsTabs() {
    const [tabValue, setTabValue] = useState("languages");
  return (
    <Tabs  value={tabValue} onValueChange={setTabValue} className=" mx-auto my-12">
      <TabsList className="mx-auto">
        <TabsTrigger isActive={tabValue === "languages"} value="languages">Languages</TabsTrigger>
        <TabsTrigger isActive={tabValue === "frontend"} value="frontend">Frontend</TabsTrigger>
        <TabsTrigger isActive={tabValue === "backend"} value="backend">Backend</TabsTrigger>
      </TabsList>
      <TabsContent value="languages">
        <SkillsList
          skills={skillsData.filter((skill) => skill.type === "language")}
        />
      </TabsContent>
      <TabsContent value="frontend">
        <SkillsList
          skills={skillsData.filter((skill) => skill.type === "frontend")}
        />
      </TabsContent>
      <TabsContent value="backend">
        <SkillsList
          skills={skillsData.filter((skill) => skill.type === "backend")}
        />
      </TabsContent>
    </Tabs>
  );
}

export default SkillsTabs;
