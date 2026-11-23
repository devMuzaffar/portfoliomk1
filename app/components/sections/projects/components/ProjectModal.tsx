"use client";

import { getProjectDetails } from "@/app/list/projectDetailsList";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LuInfo, LuX } from "react-icons/lu";
import type { ProjectData } from "./ProjectCard";

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const details = getProjectDetails(project.title);
  const description = details?.description ?? "";
  const features = details?.features ?? [];
  const isInternal = details?.type === "Internal";

  useEffect(() => {
    // Lock page scroll, close on Escape, and move focus into the dialog.
    // Cleanup restores scroll and returns focus to the element that opened it.
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  // Portal to body so fixed positioning is not affected by transformed ancestors
  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="flex max-h-[90vh] w-full max-w-2xl flex-col rounded-xl border-[1px] border-gray-400 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-900 sm:p-6"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Title */}
        <div className="flex shrink-0 items-start justify-between gap-4 pb-4">
          <h2
            id="project-modal-title"
            className="text-xl font-medium tracking-wide text-gray-900 dark:text-white sm:text-2xl"
          >
            {project.title || "Untitled Project"}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="animate shrink-0 cursor-pointer rounded-full bg-gray-300 p-2 text-black hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            <LuX size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="mb-4 border border-gray-200 dark:border-gray-700"/>

        {/* Scrollable body */}
        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto pb-2 pr-1">
          {/* Image */}
          <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
            {project.img && (
              <Image
                src={project.img}
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-contain"
                alt={project.title || "Project image"}
              />
            )}
          </div>

          {/* Description */}
          {description && (
            <>
              <h2 className="text-base font-semibold tracking-wide text-gray-900 dark:text-white sm:text-lg">
                Description
              </h2>

              {/* Divider */}
              <div className="border border-gray-200 dark:border-gray-700"/>

              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
                {description}
              </p>
            </>
          )}

          {/* Features */}
          {features.length > 0 && (
            <>
              <h2 className="text-base font-semibold tracking-wide text-gray-900 dark:text-white sm:text-lg">
                Features
              </h2>

              {/* Divider */}
              <div className="border border-gray-200 dark:border-gray-700"/>

              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
                {features.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          )}

          {/* Tech Stack */}
          {(project.icons?.length || isInternal) && (
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex flex-wrap items-center gap-2">
                {project.icons?.map((icon, index) => (
                  <div key={index} className="size-8 flex items-center justify-center rounded-full bg-gray-300 p-2 dark:bg-gray-700">
                    {icon}
                  </div>
                ))}
              </div>
              {isInternal && (
                <span
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500/90 dark:border-gray-600 dark:text-gray-300/60"
                >
                  <LuInfo size={14} />
                  Internal Project
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ProjectModal;
