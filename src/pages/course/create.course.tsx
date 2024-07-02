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
import { useSSR, useTranslation } from 'react-i18next';
import Separator from '../../components/separator';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { COURSES_URL, MEET_URL, SUBJECT_URL } from '../../utils/config';
import api from '../../api/api';
import { TSubject } from '../../entity/entity/subject';
import { AlertPopup } from '../../components/alert';

/**
 * create course page
 * @returns JSX.Element
 */
export default function CreateCourse() {
  // const { id } = useParams();
  const { t } = useTranslation();
  const [subjects, setSubjects] = useState<Array<TSubject>>();
  const [isAccept, setIsAccept] = useState(false);
  const [open, setOpen] = useState(false);
  const [meetUrl, setMeetUrl] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [draft, setDraft] = useState({
    name: '',
    description: '',
    price: 0,
    startdate: '',
    enddate: '',
    categoryid: 1,
  });

  const DAYS = [
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

  const handleConfirmCreate = () =>
    api
      .post(COURSES_URL, draft)
      .then((res) => setMessage(res.data.message))
      .catch((err) => setErrMsg(err.message));

  const handleAcceptToS = (event: ChangeEvent<HTMLInputElement>) =>
    setIsAccept(event.target.checked);

  const handleGenerateMeetingRoom = () => {
    setOpen(!open);
    if (!meetUrl) api.post(MEET_URL).then((res) => setMeetUrl(res.data));
  };

  const handleChange = (event) =>
    setDraft({ ...draft, [event.target.name]: event.target.value });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(!open);
    handleGenerateMeetingRoom;
    console.log(meetUrl);

    console.log(draft);
  };

  return (
    <>
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
          <span className='flex gap-4'>
            <span className='basis-1/2 flex flex-col gap-4'>
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
            <span className='flex flex-col gap-4 p-2 basis-1/2 border-primary border-2 rounded-xl'>
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
              <List
                className='flex-row'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {DAYS.map((d) => (
                  <ListItem
                    className='p-0'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <label className='flex cursor-pointer items-center px-2 py-2'>
                      <ListItemPrefix
                        className='mr-3'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <Checkbox
                          id='horizontal-list-react'
                          color='teal'
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
                      {capitalize(t(d))}
                    </label>
                  </ListItem>
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
      {message && <AlertPopup>{message}</AlertPopup>}
    </>
  );
}
