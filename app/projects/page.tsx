import React from 'react'
import projects from "@/app/projects";
import Link from "next/link";

const Projects = () => {
    return (
        <ul className="projects-list">
            {projects.map((project) => (
                <li key={project.id}>
                    <div className="link">
                        <span>&#8594;&nbsp;</span>
                        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default Projects
