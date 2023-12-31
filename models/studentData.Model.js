const mongoose = require('mongoose');

const StudentDataSchema = new mongoose.Schema(
    {
        student_name: String,
        student_email: String,
        institution: String,
        enrolment_date_time: String,
        enrolment_status: String,
        google_cloud_skills_boost_profile_url: String,
        of_courses_completed: Number,
        of_skill_badges_completed: Number,
        of_gen_ai_game_completed: Number,
        total_completions_of_both_pathways: String,
        redemption_status: String
    },
    { timestamps: true }
);

const StudentData = mongoose.model('StudentData', StudentDataSchema);

module.exports = StudentData;