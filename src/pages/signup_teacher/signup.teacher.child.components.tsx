import {
    Typography, Input, Button, Card, CardHeader, CardBody,
    Chip, Select, Option
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { capitalize } from "../../utils/utils";
import { SignupTeacherDetails } from "../../entity/signup.teacher.details";
import { useState } from "react";

/** */
export function TeacherSignupLabel() {
    const { t } = useTranslation();
    const signupLabel = "sign up as a teacher"
    return (
        <div className="text-center">
            <Typography
                variant='h2'
                className='font-medium mb-2 capitalize'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                {t(signupLabel)}
            </Typography>
        </div>
    )
}

/** */
export function TeacherSignupWarning() {
    const { t } = useTranslation();
    const signupPrecautions = [
        "Personal information will be kept confidential, please fill in the information completely and accurately.",
        "After submitting the application, you will receive a confirmation email that the application has been successfully sent.",
        "Within 3-7 days, please check your email for notifications about your eligibility to become a tutor in the EduConnect system.",
        "If you do not receive an email within 7 days, please contact the hotline for support: 0862 236 759."
    ]
    return (
        <Card className="w-full flex-row border-4 border-teal-800"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className='w-full'>


                <Typography
                    variant="h3"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    {t("Attention")}
                </Typography>

                <ul className="list-disc px-4">
                    <li>
                        <Typography
                            variant="lead"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            {t(capitalize(signupPrecautions[0]))}
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant="lead"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            {t(capitalize(signupPrecautions[1]))}
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant="lead"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            {t(capitalize(signupPrecautions[2]))}
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant="lead"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            {t(capitalize(signupPrecautions[3]))}
                        </Typography>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

type TSignupSectionChipParams = {
    content: string
}
/** */
export function SignupSectionChip({ content }: TSignupSectionChipParams) {
    const { t } = useTranslation();
    return <Chip
        className="bg-cyan-900 text-lg"
        value={capitalize(t(content))}
        size="lg" />
}


type TTextSectionProps = {
    label: string;
    type: string;
    isCompulsory: boolean;
    handleChange: (e: any) => void;
}
/** */
export function InputWithLabel({ label, type, isCompulsory, handleChange }: TTextSectionProps) {
    const { t } = useTranslation();

    return (
        <div>
            <div className="flex">
                <Typography
                    variant="lead"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    {t(capitalize(label))}
                </Typography>
                {isCompulsory ? (
                    <div className="text-red-500 text-center mx-2">*</div>
                ) : (<></>)}

            </div>
            <Input
                crossOrigin={true}
                size="lg"
                type={type}
                placeholder="Type..."
                className="!border !border-gray-300 bg-white text-3xl shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onChange={handleChange}
            />
        </div>
    )
}