"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
function describeCourse(status) {
    switch (status.status) {
        case "DRAFT":
            return `Draft created by ${status.createdBy} at ${status.createdAt}`;
        case "PUBLISHED":
            return `Published at ${status.publishedAt} with syllabus: ${status.syllabus}`;
        case "ACTIVE":
            return `Active with ${status.enrolledCount} students since ${status.startDate}`;
        case "ARCHIVED":
            return `Archived at ${status.archivedAt} with ${status.finalEnrollmentCount} total students`;
        case "CANCELLED":
            return `Cancelled because: ${status.reason}`;
        default: {
            const _check = status;
            throw new Error(`Unhandled course status: ${JSON.stringify(_check)}`);
        }
    }
}
