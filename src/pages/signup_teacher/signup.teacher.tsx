import { useTranslation } from "react-i18next";
import { SignupSectionChip, TeacherSignupLabel, TeacherSignupWarning, InputWithLabel } from "./signup.teacher.child.components"
import { useState } from "react";
import { SignupTeacherDetails } from "../../entity/signup.teacher.details";
import { Button, ButtonGroup } from "@material-tailwind/react";
/** */
export default function SignupTeacher() {
    const { t } = useTranslation();
    const personalInfoSectionChipTxt = "personal information";
    const applicationSectionChipTxt = "application";
    const [fullName, setFullname] = useState<string>();
    const [dateofbirth, setDateofbirth] = useState<string>();
    const [sex, setSex] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [occupation, setOccupation] = useState<string>();
    const [school, setSchool] = useState<string>();
    const [specialization, setSpecialization] = useState<string>();
    const [cardphoto, setCardphoto] = useState();
    const [nationalid, setNationalid] = useState();
    const [cv, setCv] = useState();
    const [certificates, setCertificates] = useState();

    const registerTeacher = () => {
        console.log('cardphoto: ', cardphoto)
        console.log('nationalid: ', nationalid)
        console.log('cv: ', cv)
        console.log('certificates: ', certificates)
    }

    return (
        <div className="my-5 justify-items-center">
            <TeacherSignupLabel />
            <TeacherSignupWarning />

            <div className="my-8">
                <SignupSectionChip content={t(personalInfoSectionChipTxt)} />
                <div className="grid grid-cols-2 gap-4 my-3">
                    <InputWithLabel label="full name" type="text" isCompulsory={true} handleChange={(e) => { setFullname(e.target.value) }} />
                    <InputWithLabel label="date of birth" type="date" isCompulsory={true} handleChange={(e) => setDateofbirth(e.target.value)} />
                    <InputWithLabel label="sex" type="text" isCompulsory={true} handleChange={(e) => setSex(e.target.value)} />
                    <InputWithLabel label="address" type="text" isCompulsory={true} handleChange={(e) => setAddress(e.target.value)} />
                    <InputWithLabel label="email" type="email" isCompulsory={true} handleChange={(e) => setEmail(e.target.value)} />
                    <InputWithLabel label="phone" type="phone" isCompulsory={true} handleChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>

            <div className="my-5">
                <SignupSectionChip content={t(applicationSectionChipTxt)} />
                <div className="grid grid-cols-2 gap-4 my-3">
                    <InputWithLabel label="occupation" type="text" isCompulsory={true} handleChange={(e) => { setOccupation(e.target.value) }} />
                    <InputWithLabel label="school" type="text" isCompulsory={true} handleChange={(e) => { setSchool(e.target.value) }} />
                    <InputWithLabel label="specialization" type="text" isCompulsory={true} handleChange={(e) => setSpecialization(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4 my-3">
                    <InputWithLabel label="card photo" type="file" isCompulsory={true} handleChange={(e) => { setCardphoto(e.target.value) }} />
                    <InputWithLabel label="national id" type="file" isCompulsory={true} handleChange={(e) => { setNationalid(e.target.value) }} />
                    <InputWithLabel label="CV" type="file" isCompulsory={true} handleChange={(e) => setCv(e.target.value)} />
                    <InputWithLabel label="certificates" type="file" isCompulsory={true} handleChange={(e) => setCertificates(e.target.value)} />
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
                        onClick={registerTeacher}
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>{t("send")}</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}