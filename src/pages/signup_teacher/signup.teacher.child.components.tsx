import {
    Typography, Input, Button, Card, CardHeader, CardBody,
    Chip, Select, Option, DialogHeader, Dialog, DialogBody, DialogFooter,
    DialogProps,
    DialogHeaderProps
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { capitalize } from "../../utils/utils";
import { SignupTeacherDetails } from "../../entity/signup.teacher.details";
import { useState } from "react";
import { type InputProps } from '@material-tailwind/react';
import { useNavigate } from "react-router-dom";

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
    handleChange: (e: any) => void;
}
    & Omit<
        InputProps,
        | 'onPointerEnterCapture'
        | 'onPointerEnterCapture'
        | 'crossOrigin'
    >;
/** */
export function TextInputWithLabel({ handleChange, ...props }: TTextSectionProps) {
    const { t } = useTranslation();
    return (
        <div>
            <Input
                {...props}
                // required={isCompulsory}
                crossOrigin={true}
                size="lg"
                placeholder="Type..."
                containerProps={{ className: "min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onChange={handleChange}
            />
        </div>
    )
}



type TSelectItem = {
    key: number,
    value: string,
}
type TSelectInputWithLabelProps = {
    label: string;
    items: TSelectItem[];
    handleChange: (e: any) => void;
} & Omit<
    InputProps,
    | 'onPointerEnterCapture'
    | 'onPointerEnterCapture'
    | 'crossOrigin'
    | 'required'
>;
/** */
export function SelectInputWithLabel({ label, items, handleChange }: TSelectInputWithLabelProps) {
    const { t } = useTranslation();
    return (
        <div>
            <Select label={label}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onChange={handleChange}>
                {items.map((item) => (
                    <Option key={item.key} value={item.value}>{capitalize(t(item.value))}</Option>
                ))}
            </Select>
        </div>
    )
}

type TDateTimeInputWithLabelProps = {
    // label: string;        
    handleChange: (e: any) => void;
} & Omit<
    InputProps,
    | 'onPointerEnterCapture'
    | 'onPointerEnterCapture'
    | 'crossOrigin'
>;

/** */
export function DateTimeInputWithLabel({ handleChange, ...props }: TDateTimeInputWithLabelProps) {
    const { t } = useTranslation();
    return (
        <div>
            <Input
                {...props}
                crossOrigin={true}
                size="lg"
                placeholder="Type..."
                // containerProps={{ className: "min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onChange={handleChange}
            />
        </div>
    )

}


type TImageUploaderProps = {
    acceptFileTypes: string;
    handleChange: (e: any) => void
} & Omit<
    InputProps,
    | 'onPointerEnterCapture'
    | 'onPointerEnterCapture'
    | 'crossOrigin'
>;
/** */
export function ImageUploader({ acceptFileTypes, handleChange, ...props }: TImageUploaderProps) {
    return (
        <Input
            {...props}
            crossOrigin={true}
            size="lg"
            type="file"
            accept={acceptFileTypes}
            placeholder="Type..."
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onChange={handleChange}
        />
    )
}
type TSuccessfulRegistrationDialog = {
    isOpen: boolean;
    handleOpen: () => void;
}
/** */
export function SuccessfulRegistrationDialog({ isOpen, handleOpen }: TSuccessfulRegistrationDialog) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const navigateToHomePage = () => {
        handleOpen()
        navigate('/');
    }
    return (
        <Dialog onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder={undefined}
            open={isOpen} handler={handleOpen}>
            <DialogHeader
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={undefined}
            >
                {t("information")}
            </DialogHeader>
            <DialogBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={undefined}>
                {t("successfully updated the profile for teacher")}.
            </DialogBody>
            <DialogFooter
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={undefined}>
                <Button
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    placeholder={undefined} variant="gradient" color="green"
                    onClick={navigateToHomePage}>
                    <span>{t("confirm")}</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}