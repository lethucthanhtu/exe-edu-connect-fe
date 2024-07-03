import { useTranslation } from "react-i18next";
import { SignupSectionChip, TeacherSignupLabel, TeacherSignupWarning, TextInputWithLabel, DateTimeInputWithLabel, SelectInputWithLabel, ImageUploader } from "./signup.teacher.child.components"
import { useState } from "react";
import { SignupTeacherDetails } from "../../entity/signup.teacher.details";
import { Button, ButtonGroup } from "@material-tailwind/react";
import api from "../../api/api";
import axios from "axios";
/** */
export default function SignupTeacher() {
    const { t } = useTranslation();
    const personalInfoSectionChipTxt = "personal information";
    const [errorMessage, setErrorMessage] = useState<string>('');
    const SIGNUP_TEACHER_URL = "/api/teacher/profile"
    const applicationSectionChipTxt = "application";
    const acceptedImageFormats = ".jpg,.png"
    const sexes = [{ key: 1, value: 'male' }, { key: 2, value: 'female' }, { key: 3, value: 'prefer not to say' }]
    const putRequestHeaders =
    {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }

    const [cardphoto, setCardphoto] = useState<File>();
    const [nationalid, setNationalid] = useState<File>();
    const [cv, setCv] = useState<File>();
    const [certificates, setCertificates] = useState<File[]>();

    const [teacherDetails, setTeacherDetails] = useState<SignupTeacherDetails>({
        fullname: 'abc',
        dateofbirth: 'xyz',
        sex: 'prefer not to say',
        address: '123',
        email: 'e@gmail.com',
        phone: '123456',
        occupation: 'student',
        school: 'abc',
        specialization: 'abc',
    })
    const handleTextInput = (event) => {
        setTeacherDetails({
            ...teacherDetails,
            [event.target.name]: event.target?.value
        });
    }

    const handleDropdownInput = (value) => {
        console.log(value)
        setTeacherDetails({
            ...teacherDetails,
            ['sex']: value
        })
    }   
    const registerTeacher = async (event) => {
        event.preventDefault();

        const formData = prepareFormData();
        console.log(formData)
        api.put(
            SIGNUP_TEACHER_URL, formData, putRequestHeaders)
            .then((res) => {
                console.log(res)
                const token = res.data?.returnData;
                // sessionStorage.setItem('token', token);                
            })
            .catch((err) => setErrorMessage(err.response.data.message))
        // .finally(() => location.reload());
    }

    const prepareFormData = (): FormData => {
        const formData = new FormData();
        formData.append('request', JSON.stringify(teacherDetails));
        formData.append('cardphoto', cardphoto);
        formData.append('nationalid', nationalid);
        formData.append('cv', cv);
        for (let i = 0; i < certificates.length; i++) {
            formData.append('certificates', certificates[i]);
        }
        return formData;
    }


    return (
        <div className="my-5 justify-items-center">
            <TeacherSignupLabel />
            <TeacherSignupWarning />
            <form method="post" onSubmit={registerTeacher} >
                <div className="my-8">
                    <SignupSectionChip content={t(personalInfoSectionChipTxt)} />
                    <div className="grid grid-cols-2 gap-4 my-3">
                        <TextInputWithLabel name='fullname' label="full name" type="text" handleChange={handleTextInput} required />
                        <DateTimeInputWithLabel name='dateofbirth' label="date of birth" type="date" handleChange={handleTextInput} required />
                        <SelectInputWithLabel name='sex' label="gender" items={sexes} handleChange={handleDropdownInput} />
                        <TextInputWithLabel name='address' label="address" handleChange={handleTextInput} required />
                        <TextInputWithLabel name='email' label="email" type="email" handleChange={handleTextInput} required />
                        <TextInputWithLabel name='phone' label="phone" type="number" handleChange={handleTextInput} required />
                    </div>
                </div>

                <div className="my-5">
                    <SignupSectionChip content={t(applicationSectionChipTxt)} />
                    <div className="grid grid-cols-2 gap-4 my-3">
                        <TextInputWithLabel name='occupation' label="occupation" type="text" handleChange={handleTextInput} required />
                        <TextInputWithLabel name='school' label="school" type="text" handleChange={handleTextInput} required />
                        <TextInputWithLabel name='specialization' label="specialization" type="text" handleChange={handleTextInput} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-3">
                        <ImageUploader name='cardphoto' label="card photo" required acceptFileTypes={acceptedImageFormats}
                            handleChange={(e) => setCardphoto(e.target.files[0])} />
                        <ImageUploader name='nationalid' label="national id" required acceptFileTypes={acceptedImageFormats}
                            handleChange={(e) => setNationalid(e.target.files[0])} />
                        <ImageUploader name='cv' label="CV" required acceptFileTypes={acceptedImageFormats}
                            handleChange={(e) => setCv(e.target.files[0])}
                        />
                        <ImageUploader name='certificates' label="certificates" required multiple acceptFileTypes={acceptedImageFormats}
                            handleChange={(e) => setCertificates(e.target.files)} />
                    </div>
                </div>

                <div className="my-5">
                    <ButtonGroup
                        className="justify-items-center"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        <Button
                            className="border-cyan-800"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>{t("redo")}</Button>
                        <Button
                            className="bg-cyan-800"
                            type="submit"
                            // onClick={registerTeacher}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>{t("send")}</Button>
                    </ButtonGroup>
                </div>
            </form>
        </div>
    )
}