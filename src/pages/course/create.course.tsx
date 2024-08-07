import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Option,
  Select,
  Textarea,
  Typography,
} from '@material-tailwind/react';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import Separator from '../../components/separator';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  COURSE_URL,
  CURR_USER_DATA_URL,
  MEET_URL,
  SUBJECT_URL,
} from '../../utils/config';
import api from '../../api/api';
import { TSubject } from '../../entity/entity/subject';
import { AlertPopup } from '../../components/alert';
import { useNavigate } from 'react-router-dom';
import { TUser } from '../../entity/user';
import Loading from '../../components/loading';

type TScheduleDate = {
  dayofweek: string;
  starttime: string;
  duration: number;
};

type TCreateCourse = {
  name: string;
  description: string;
  price: number;
  startdate: string;
  enddate: string;
  categoryid: number;
  meeturl: string;
  schedulerequests: TScheduleDate[];
};

type TDayProps = {
  day: string;
  checkList: any[];
  setCheckList: any;
  schedules: TScheduleDate[];
  setSchedules: any;
  // draft: TCreateCourse;
  // setDraft: any;
  // handleCheckDay: (event) => void;
  // handleCheckList: (event) => void;
};

/** */
function Days({
  day,
  checkList,
  setCheckList,
  schedules,
  setSchedules,
}: // draft,
// setDraft,
TDayProps) {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  const [schedule, setSchedule] = useState<TScheduleDate>({
    dayofweek: '',
    duration: 60,
    starttime: '',
  });

  const handleNewSchedule = (event: ChangeEvent<HTMLInputElement>) => {
    let sList = schedules;

    const et = event.target;
    const key = et.accessKey.toUpperCase();
    const val = Number(et.value) || et.value;

    // check if schedule exist
    let sche = schedules.find((s) => s.dayofweek === key);

    if (sche) {
      // delete if exist (add again later)
      sList = sList.filter((s) => s.dayofweek !== key);
      sche = { ...schedule, [et.name]: val };
      setSchedule(sche);
    } else {
      sche = schedule;
      sche.dayofweek = key;
      setSchedule((prev) => ({ ...prev, [et.name]: val }));
    }
    sList.push(sche);
    setSchedules(sList);

    // let d = draft;
    // d.scheduleRequest = s
  };

  const handleCheckDay = (event: ChangeEvent<HTMLInputElement>) => {
    let checks = checkList;
    let sList = schedules;
    const et = event.target;
    const checked = et.checked;
    const key = et.accessKey.toUpperCase();
    setIsChecked(checked);

    if (checked) {
      checks.push(key);
    } else {
      checks = checks.filter((curr) => curr !== key);

      sList = sList.filter((s) => s.dayofweek !== key);
      setSchedules(sList);
    }

    checks = [...new Set(checks)];

    setCheckList(checks);
    // console.log(checks);
  };
  return (
    <span className='flex flex-wrap gap-2 justify-between w-full'>
      <ListItem
        className='p-0 xs:basis-1/3'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <label className='flex w-full cursor-pointer items-center px-2'>
          <ListItemPrefix
            className='mr-3'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Checkbox
              id='horizontal-list-react'
              color='teal'
              accessKey={day}
              onChange={handleCheckDay}
              key={day}
              ripple={false}
              className='hover:before:opacity-0'
              containerProps={{
                className: 'p-0',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </ListItemPrefix>
          <ListItem
            // className='w-full'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(day))}
          </ListItem>
        </label>
      </ListItem>
      <div className='xs:basis-2/3 flex flex-wrap sm:flex-nowrap justify-end gap-2'>
        <Input
          accessKey={day}
          label={capitalize(t(`start time`))}
          type='time'
          name='starttime'
          disabled={!isChecked}
          value={isChecked && undefined}
          onChange={handleNewSchedule}
          className='basis-1/2'
          color='teal'
          required={isChecked}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          value={isChecked && undefined}
          disabled={!isChecked}
          onChange={handleNewSchedule}
          accessKey={day}
          color='teal'
          required={isChecked}
          name='duration'
          label={capitalize(t(`duration (min)`))}
          className='basis-1/2'
          type='number'
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </div>
    </span>
  );
}

/**
 * create course page
 * @returns JSX.Element
 */
export default function CreateCourse() {
  // const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [user, setUser] = useState<TUser>();
  const [subjects, setSubjects] = useState<Array<TSubject>>();
  const [isAccept, setIsAccept] = useState(true);
  const [open, setOpen] = useState(false);
  const [meetUrl, setMeetUrl] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [draft, setDraft] = useState<TCreateCourse>();
  const [checkList, setCheckList] = useState([]);
  const [schedules, setSchedules] = useState<Array<TScheduleDate>>([]);

  // check access role
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoading(true);
      api
        .get(CURR_USER_DATA_URL)
        .then((res) => setUser(res.data.returnData))
        .then(
          () =>
            user.role[0].rolename.toLowerCase() !== 'teacher' &&
            navigate('/', { replace: true })
        )
        .catch((err) => err)
        .finally(() => setLoading(false));
    } else navigate('/', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const DAYS = new Map<string, string>([
  //   ['MON', 'monday'],
  //   ['TUE', 'tuesday'],
  //   ['WED', 'wednesday'],
  //   ['THU', 'thursday'],
  //   ['FRI', 'friday'],
  //   ['SAT', 'saturday'],
  //   ['SUN', 'sunday'],
  // ]);

  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  useEffect(() => {
    api.get(SUBJECT_URL).then((res) => setSubjects(res.data.returnData));
    api.post(MEET_URL).then((res) => setMeetUrl(res.data));
  }, []);

  const handleConfirmCreate = () => {
    setApiLoading(true);
    setErrMsg('');

    api
      .post(COURSE_URL, draft)
      .then((res) => {
        setMessage(res.data.message);
        setOpen(!open);
      })
      .catch((err) => setErrMsg(err.message))
      .finally(() => setApiLoading(false));
  };

  const handleAcceptToS = (event: ChangeEvent<HTMLInputElement>) =>
    setIsAccept(event.target.checked);

  const handleGenerateMeetingRoom = () => {
    setErrMsg('');
    setMessage('');
    setOpen(!open);
    if (!meetUrl) api.post(MEET_URL).then((res) => setMeetUrl(res.data));
  };

  const handleChange = (event) => {
    const et = event.target;
    const val = Number(et.value) || et.value;
    setDraft({ ...draft, [et.name]: val });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(!open);
    handleGenerateMeetingRoom;

    draft.meeturl = meetUrl;
    draft.schedulerequests = schedules;
    setDraft(draft);
  };

  const handleChooseSubject = (event) => {
    draft.categoryid = Number(event);
    setDraft(draft);
  };

  return (
    <>
      {loading ? (
        <Loading middle />
      ) : (
        <form
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col justify-center gap-4 container'
        >
          <Typography
            variant='h1'
            className='text-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('create course'))}
          </Typography>
          <span className='border-2 border-primary p-4 rounded-xl flex flex-col gap-4 mb-4'>
            <Separator label='general information' />
            <span className='flex flex-col md:flex-row gap-4'>
              <span className='basis-1/3 flex flex-col gap-4'>
                <Input
                  color='teal'
                  type='text'
                  required
                  name='name'
                  className=''
                  onChange={handleChange}
                  label={capitalize(t(`course name`))}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <Input
                  color='teal'
                  type='number'
                  required
                  name='price'
                  className=''
                  defaultValue={0}
                  onChange={handleChange}
                  label={capitalize(t(`Price`))}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                {subjects && (
                  <Select
                    label={capitalize(t(`subject`))}
                    value=''
                    onChange={handleChooseSubject}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {subjects.map((s) => (
                      <Option key={s.categoryname} value={s.id + ''}>
                        {s.categoryname}
                      </Option>
                    ))}
                  </Select>
                )}
                <Input
                  color='teal'
                  label={capitalize(t(`image`))}
                  type='file'
                  className='basis-1/2'
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </span>
              <span className='flex flex-col gap-4 p-2 basis-2/3 border-primary border-2 rounded-xl'>
                <Separator label='date and time' className='' />
                <Input
                  color='teal'
                  name='startdate'
                  type='date'
                  required
                  // className='basis-1/2'
                  onChange={handleChange}
                  label={capitalize(t('start date'))}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <Input
                  color='teal'
                  name='enddate'
                  type='date'
                  required
                  onChange={handleChange}
                  // className='basis-1/2'
                  label={capitalize(t('end date'))}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <Separator label='schedule' className='' />

                <List
                  className='flex w-full'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {days.map((d) => (
                    <Days
                      day={d}
                      checkList={checkList}
                      setCheckList={setCheckList}
                      schedules={schedules}
                      setSchedules={setSchedules}
                    />
                  ))}
                </List>
              </span>
            </span>
            <Separator label='detail description' />
            <Textarea
              color='teal'
              required
              className='w-full'
              name='description'
              onChange={handleChange}
              label={capitalize(t(`course description`))}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <div className='mt-4 flex flex-col gap-4'>
              <Separator label='danger zone' className='' />
              <Checkbox
                onChange={handleAcceptToS}
                color='teal'
                label={
                  <>
                    <Typography
                      color='blue-gray'
                      className='font-medium'
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {capitalize(t(`accept the Term and Conditions`), false)}
                    </Typography>
                    <Typography
                      variant='small'
                      color='gray'
                      className='font-normal'
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {capitalize(
                        t(`I confirm have read and agree with ToS`),
                        false
                      )}
                    </Typography>
                  </>
                }
                containerProps={{
                  className: '-mt-5',
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <span className='flex justify-end'>
                <Button
                  type='submit'
                  className='bg-primary'
                  disabled={!isAccept}
                  // onClick={handleGenerateMeetingRoom}
                  // type='submit'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t(`get meet URL`)}
                </Button>
                <Dialog
                  open={open}
                  handler={handleGenerateMeetingRoom}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <DialogHeader
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {capitalize(t(`Here is your classroom!`))}
                  </DialogHeader>
                  <DialogBody
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {apiLoading && <Loading middle />}
                    <span className='relative flex w-full mb-4'>
                      <Input
                        type='text'
                        label='Meet URL'
                        color='teal'
                        value={meetUrl}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined}
                      />
                      <Button
                        size='sm'
                        onClick={() => {
                          navigator.clipboard.writeText(meetUrl);
                        }}
                        className='!absolute right-1 top-1 rounded flex justify-center items-center gap-2 bg-primary'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        copy
                        <span className='material-symbols-outlined text-[100%]'>
                          content_copy
                        </span>
                      </Button>
                    </span>
                    <Typography
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {capitalize(
                        t(
                          `Please navigate to classroom URL to enroll as Teacher for that room.`
                        ),
                        false
                      )}
                    </Typography>
                    <Typography
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {capitalize(
                        t(
                          `Please note that it is not our responsibility that you not verify as Teacher for this classroom`
                        )
                      )}
                    </Typography>
                  </DialogBody>
                  <DialogFooter
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <Button
                      variant='text'
                      color='red'
                      onClick={() => setOpen(!open)}
                      className='mr-1'
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <span>Cancel</span>
                    </Button>
                    <Button
                      className='bg-primary'
                      onClick={handleConfirmCreate}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <span>Confirm and Create Course</span>
                    </Button>
                  </DialogFooter>
                </Dialog>
              </span>
            </div>
          </span>
        </form>
      )}
      {message && <AlertPopup color='green'>{message}</AlertPopup>}
      {errMsg && <AlertPopup>{errMsg}</AlertPopup>}
    </>
  );
}
