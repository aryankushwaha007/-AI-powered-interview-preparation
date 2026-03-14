const mongoose = require("mongoose");


/**
 *  - job description schema :string
 * - resume text : string
 * -self description : string
 * -match score : number
 * - technical question :
 *         [{
 *               question :"",
 *              intention : "",
 *                answer : "",
 *          }]
 * 
 * - behavioral question :
 *            [{
 *               question :"",
 *               intention : "",
 *               answer : "",
 *                }]
 * -skill gap:[{
 *              skill : "",
 *               severity:{
 *                  type : string,
 *                 enum : ["low", "medium", "high"]
 *                    }
 *                }]
 * -preparation plan:[{
 *         day :Number,
 *         focus : string,
 *          tasks : [string]
 *                  }]
 */
const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required"]
    }

}, {
    _id: false
});

const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required"]
    }

}, {
    _id: false
});

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required"]
    }
}, {
    _id: false
});

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus: {
        type: String,
        required: [true, "Focus is required"]
    },
    tasks: {
        type: String,
        required: [true, "Tasks are required"]
    }
}, {
    _id: false
});


const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: true
    },
    resumeText: {
        type: String
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema]
}, {
    timestamps: true
});

const interviewReport = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReport;