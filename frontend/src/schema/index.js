import * as yup from "yup";

const arithmeticExpressionPattern = /^\d+(\s*[\+\-\*/]\s*\d+)*$/;

const userSchema = yup.object().shape({
	name: yup.string().min(5).max(30).required("Please Enter your Name"),
});

const evaluationSchema = yup.object().shape({
	valueToEvaluate: yup
		.string()
		.matches(arithmeticExpressionPattern, {
			message: "only write arithmetic Expressions ",
		})
		.required("arithmetic Expression is required "),
});

export { userSchema, evaluationSchema };
