import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import ProfilePic from '@/Components/ProfilePic';
import ConnectModal from '@/Components/ConnectModal';
import { Head } from '@inertiajs/react';

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
        delete: destroy,
        reset,
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
            <Head title="Howdy stranger!" />
            <ProfilePic />
            {/* Profile Information */}
            <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
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
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">PHP, Laravel, React, Java, MySQL, probably others</dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                        Curious human who loves bringing definition to ambiguity and solving complex problems.
                        <p>
                        Outside of work, I co-lead a free fitness group, am an ultramarathon runner, and music enthusiast.
                        </p>
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
