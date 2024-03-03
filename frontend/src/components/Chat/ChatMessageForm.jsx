import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Error/ErrorMessage";
import { evaluationSchema } from "../../schema";
import { calculateArithmeticOperation } from "../../api";
import { getUserFromLocalStorage } from "../../utils";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const SendMessageForm = ({ setChatConversation }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isDirty, isValid },
		reset,
	} = useForm({
		resolver: yupResolver(evaluationSchema),
		mode: "all",
	});

	const submitHandler = async (data, event) => {
		event.preventDefault();
		const name = getUserFromLocalStorage();
		const response = await calculateArithmeticOperation({ ...data, name });
		if (!response?.success) return;
		setChatConversation((prev) => [...prev, { ...response?.data?.result }]);
		reset();
	};

	return (
		<div className="w-100 sm:w-1/2">
			<form className="mt-5 w-100 grid grid-cols-12 gap-2" onSubmit={handleSubmit(submitHandler)}>
				<TextInput
					{...register("valueToEvaluate")}
					type="text"
					placeholder="Enter Operation..."
					className="col-span-10"
					inputMode="numeric"
				/>
				<Button
					type="submit"
					name="submitBtn"
					className="px-2 py-2 col-span-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-500 hover:cursor-pointer shadow-md  focus:ring-blue-600 ring-1 focus-visible:ring-blue-600"
					disabled={!(isValid && isDirty) || isSubmitting}
				>
					Submit
				</Button>
			</form>
			{errors.valueToEvaluate && <ErrorMessage message={errors.valueToEvaluate.message} />}
		</div>
	);
};

export default SendMessageForm;
