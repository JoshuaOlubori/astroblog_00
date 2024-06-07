/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WYjF6OFxtaS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"



import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const projects = [
    {
      id: 1,
      title: "COVID-19 Vaccine Coverage in the UK",
      category: "Viz",
      codeLink: "#",
      demoLink: "#",
      coverImage: "/placeholder.svg",
    },
    {
      id: 2,
      title: "End-to-End ETL Analysis of Sales Data",
      category: "SQL",
      codeLink: "#",
      demoLink: "#",
      coverImage: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Predictive Maintenance Model for Manufacturing",
      category: "Others",
      codeLink: "#",
      demoLink: "#",
      coverImage: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Customer Churn Analysis",
      category: "SQL",
      codeLink: "#",
      demoLink: "#",
      coverImage: "/placeholder.svg",
    },
  ]
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)
  return (
    <div className="bg-white p-8">
      <div className="flex justify-center space-x-4 mb-8">
        <Button variant={selectedCategory === "All" ? "default" : "outline"} onClick={() => setSelectedCategory("All")}>
          All
        </Button>
        <Button variant={selectedCategory === "SQL" ? "default" : "outline"} onClick={() => setSelectedCategory("SQL")}>
          SQL
        </Button>
        <Button variant={selectedCategory === "Viz" ? "default" : "outline"} onClick={() => setSelectedCategory("Viz")}>
          Viz
        </Button>
        <Button
          variant={selectedCategory === "Others" ? "default" : "outline"}
          onClick={() => setSelectedCategory("Others")}
        >
          Others
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="w-full">
            <img
              src="/placeholder.svg"
              alt={project.title}
              width={600}
              height={400}
              className="aspect-[3/2] object-cover rounded-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold">{project.title}</h5>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" href={project.codeLink}>
                  Code
                </Button>
                <Button href={project.demoLink}>Demo</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}