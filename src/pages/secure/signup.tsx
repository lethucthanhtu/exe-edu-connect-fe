import { useState, useRef, useEffect } from 'react';
import {
  Typography,
  Input,
  Button,
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Switch,
  SwitchProps,
} from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { InputEmail, InputPasswordGroupCheck } from '../../components/input';
import { FormHeader } from '../../components/form';
import api from '../../api/api';
import { GOOGLE_SIGNUP_URL, REGISTER_URL } from '../../utils/config';
import GoogleButton from '../../components/googleButton';
import { TUser } from '../../entity/user';
import { AlertPopup } from '../../components/alert';
import Loading from '../../components/loading';

type TRoleRadioButtonProps = {
  className?: string;
};

/**
 * @deprecated
 *
 */
function RoleRadioButton({ className }: TRoleRadioButtonProps) {
  const { t } = useTranslation();
  return (
    <Card
      className={className}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <List
        className='flex-row'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <ListItem
          className='p-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <label
            htmlFor='horizontal-list-react'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix
              className='mr-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Radio
                name='horizontal-list'
                color='teal'
                id='horizontal-list-react'
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
            <Typography
              color='blue-gray'
              className='font-medium text-blue-gray-400'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('tutor'))}
            </Typography>
          </label>
        </ListItem>
        <ListItem
          className='p-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <label
            htmlFor='horizontal-list-vue'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix
              className='mr-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Radio
                name='horizontal-list'
                defaultChecked
                color='teal'
                id='horizontal-list-vue'
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
            <Typography
              color='blue-gray'
              className='font-medium text-blue-gray-400'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('student'))}
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

/** */
export function RoleSwitch({
  ...props
}: Omit<
  SwitchProps,
  'onPointerEnterCapture' | 'onPointerLeaveCapture' | 'crossOrigin'
>) {
  const { t } = useTranslation();
  const roleToggleRef = useRef(null);

  return (
    <span
      className={`flex justify-center items-center gap-6 border rounded-lg py-1.5 px-4 shadow-xl border-blue-gray-200 ${props.className}`}
    >
      <Typography
        variant='paragraph'
        color={props.color || 'teal'}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={undefined}
      >
        {capitalize(t('student'))}
      </Typography>
      <Switch
        {...props}
        color={props.color || 'teal'}
        inputRef={roleToggleRef}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
      <Typography
        variant='paragraph'
        color={props.color || 'teal'}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={undefined}
      >
        {capitalize(t('tutor'))}
      </Typography>
    </span>
  );
}

/**
 * sign up page
 * @returns JSX.Element
 */
export default function Signup() {
  const { t } = useTranslation();
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState(1);
  const [formData, setFormData] = useState({
    role: 1,
    email: '',
    fullName: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    api
      .post(REGISTER_URL, formData)
      .then((res) => {
        const token = res.data.returnData;
        if (token == null)
          navigate('/login', { replace: true })
        else {
          localStorage.setItem('token', token);
          navigate('/signup/teacher')
        }
      })
      .catch((err) => setErrMsg(err.response.data.errorModels[0].detail))
      .finally(() => setLoading(false));
  };

  const handleRoleChange = (event) => {
    const isChecked = event.target.checked;
    const r = !isChecked ? 1 : 2;
    setRole(r);
    setFormData((prev) => ({
      ...prev,
      role: r,
    }));
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      // role: roleId,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        // onSubmit={handleSubmit}
        action='#'
        className='size-full flex flex-col gap-4 justify-center items-center'
      >
        <FormHeader label='register new account' />
        <div className='flex flex-col md:flex-row w-full justify-center md:gap-4 items-center'>
          <Typography
            variant='paragraph'
            className='font-medium text-blue-gray-500'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('your role'))}
          </Typography>
          {/* <RoleRadioButton className='w-3/4' /> */}
          <RoleSwitch name='role' onClick={handleRoleChange} />
        </div>
        {/* <Input
          required
          name='fullName'
          onChange={handleChangeInput}
          color='teal'
          type='text'
          label={capitalize(t('your name'))}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        /> */}
        <InputEmail name='email' onChange={handleChangeInput} color='teal' />
        <InputPasswordGroupCheck
          name='password'
          onChange={handleChangeInput}
          color='teal'
        />
        <div className='mt-4 flex flex-col gap-6 w-full'>
          <Button
            // type='submit'
            onClick={handleSubmit}
            variant='filled'
            className='bg-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('sign up')}
          </Button>
          {/* <GoogleButton type='signup' roleId={roleId} /> */}
          <Typography
            variant='paragraph'
            className='flex gap-1 w-full justify-center items-center'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {`${capitalize(t('have account'))}?`}
            <Link to='/login'>
              <Typography
                variant='paragraph'
                className='text-primary font-medium hover:underline underline-offset-2'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {`${capitalize(t('sign in now'))}`}
              </Typography>
            </Link>
          </Typography>
        </div>
      </form>
      {loading && (
        <div className='absolute size-full top-0 left-0'>
          <Loading middle />
        </div>
      )}
      {errMsg && <AlertPopup>{errMsg}</AlertPopup>}
    </>
  );
}
