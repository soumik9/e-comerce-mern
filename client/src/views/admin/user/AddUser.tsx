import React, { useState } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from '@/components/Form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { genderOptions, rankOptions, rolesOptions, userDefaultValues, userStatusOptions } from './utils/UserConstants';
import ImageBox from '@/components/Form/ImageBox';
import toast from 'react-hot-toast';
import SelectCustom from '@/components/Form/SelectCustom';
import { districtOptions } from './utils/districtOptions';
import Button from '@/components/Button/Button';
import { userSchema } from './utils/UserSchema';
import { IUserFormInput } from './utils/UserInterface';

const AddUser = () => {

    const { control, handleSubmit, formState: { errors }, watch } = useForm<IUserFormInput>({
        resolver: yupResolver(userSchema),
        defaultValues: userDefaultValues,
    });


    const [imgSrc, setImgSrc] = useState<any>(null);
    const [image, setImage] = useState<any>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    // image validation
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) return;

        if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|JPG|PNG|webp)$/)) {
            setImgSrc('');
            setImage('')
            toast.error('Only jpg, jpeg & png file supported!');
        } else {
            setImgSrc(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0])
        }
    }

    // submit action
    const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-9 gap-8">

                <div className='col-span-3'>
                    <ImageBox
                        width={320}
                        height={100}
                        demoImgSrc={imgSrc ? imgSrc : '/default_profile.png'}
                        name='image'
                        imgCss=' '
                        label={`Choose a picture`}
                        onChange={handleImageChange}
                        alt='user photo'
                    />
                </div>

                <div className='col-span-6'>

                    <div className='grid grid-cols-2 gap-5'>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (<Input
                                label="Full Name"
                                id="name"
                                placeholder="ex: Mr Soumik Ahammed"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors.name?.message}
                                labelRequired
                            />)}
                        />

                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (<Input
                                label="Username"
                                id="username"
                                placeholder="soumikahammed"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors.username?.message}
                                labelRequired
                            />)}
                        />

                        <Controller
                            name="mobile.primary"
                            control={control}
                            render={({ field }) => (<Input
                                label="Primary Mobile Number"
                                id="primaryMobileNumber"
                                placeholder="01689201370"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors.mobile?.primary?.message}
                                labelRequired
                            />)}
                        />

                        <Controller
                            name="mobile.secondary"
                            control={control}
                            render={({ field }) => (<Input
                                label="Secondary Mobile Number"
                                id="secondaryMobileNumber"
                                placeholder="01406210499"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                            />)}
                        />

                        <Controller
                            name="address.present"
                            control={control}
                            render={({ field }) => (<Input
                                label="Present Address"
                                id="presentAddress"
                                placeholder="Naogaon, Rajshahi, Bangladesh"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors.address?.present?.message}
                                labelRequired
                            />)}
                        />

                        {/* Select City */}
                        <Controller
                            name="address.city"
                            control={control}
                            render={({ field }) => (
                                <SelectCustom
                                    label="Select City"
                                    options={districtOptions}
                                    value={field.value}
                                    onChange={(option: any) => field.onChange(option)}
                                    error={errors.address?.city?.message}
                                    isSearchable
                                    required
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (<Input
                                label="Password"
                                id="password"
                                placeholder="****************"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors.password?.message}
                                type={showPassword ? 'text' : 'password'}
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                                passwordToggle
                                labelRequired
                                autoComplete="new-password"
                            />)}
                        />

                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => (<Input
                                label="Confirm Password"
                                id="confirmPassword"
                                placeholder="****************"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors.confirmPassword?.message}
                                type={showConfirmPassword ? 'text' : 'password'}
                                showPassword={showConfirmPassword}
                                setShowPassword={setShowConfirmPassword}
                                passwordToggle
                                disabled={!watch('password')}
                                labelRequired
                            />)}
                        />


                        {/* Select gender */}
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <SelectCustom
                                    label="Select Gender"
                                    options={genderOptions}
                                    value={field.value}
                                    onChange={(option: any) => field.onChange(option)}
                                    error={errors.gender?.message}
                                    isSearchable
                                />
                            )}
                        />

                        {/* Select rank */}
                        <Controller
                            name="rank"
                            control={control}
                            render={({ field }) => (
                                <SelectCustom
                                    label="Select Rank"
                                    options={rankOptions}
                                    value={field.value}
                                    onChange={(option: any) => field.onChange(option)}
                                    error={errors.rank?.message}
                                />
                            )}
                        />

                        {/* Select role */}
                        <Controller
                            name="role"
                            control={control}
                            render={({ field }) => (
                                <SelectCustom
                                    label="Select Role"
                                    options={rolesOptions}
                                    value={field.value}
                                    onChange={(option: any) => field.onChange(option)}
                                    error={errors.role?.message}
                                />
                            )}
                        />

                        {/* Select status */}
                        <Controller
                            name="status"
                            control={control}
                            render={({ field }) => (
                                <SelectCustom
                                    label="Select Status"
                                    options={userStatusOptions}
                                    value={field.value}
                                    onChange={(option: any) => field.onChange(option)}
                                    error={errors.status?.message}
                                />
                            )}
                        />
                    </div>

                    <div className='mt-5 flex justify-end'>
                        <Button
                            text='Add User'
                            css='w-[150px]'
                        />
                    </div>

                </div>

            </div>
        </form>
    )
}

export default AddUser