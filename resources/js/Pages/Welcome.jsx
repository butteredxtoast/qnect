import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import ProfilePic from '@/Components/ProfilePic';
import ConnectModal from '@/Components/ConnectModal';

export default function Profile() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const passwordInput = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route('profile.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const {
        post,
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
        connectionDetail: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <ProfilePic />
            {/* Profile Information */}
            <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">(317)340-3179</dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">San Francisco, CA</dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">LinkedIn</dt>
                        <dd className="mt-1 text-sm leading-6 text-indigo-600 sm:col-span-2 sm:mt-0">
                            <a href="https://www.linkedin.com/in/billkeuth/" target="_blank">linkedin.com/in/billkeuth/</a>
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Github</dt>
                        <dd className="mt-1 text-sm leading-6 text-indigo-600 sm:col-span-2 sm:mt-0">
                            <a href="https://github.com/butteredxtoast" target="_blank">github.com/butteredxtoast</a>
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Skills</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">PHP, Laravel, React, Java, MySQL</dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                            I am a highly motivated backend developer with over 10 years of experience in PHP and Laravel. I enjoy creating scalable, efficient web applications and solving complex problems.
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0">
                        <div className="flex justify-center">
                            <PrimaryButton onClick={confirmUserDeletion}>Let's Connect!</PrimaryButton>
                            <ConnectModal
                                show={confirmingUserDeletion}
                                onClose={closeModal}
                                handleOptionChange={handleOptionChange}
                                selectedOption={selectedOption}
                            />
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
}
