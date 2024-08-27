import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import ProfilePic from '@/Components/ProfilePic';
import ConnectModal from '@/Components/ConnectModal';
import { Head } from '@inertiajs/react';

export default function Profile() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

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
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"> {/* Added dark mode background and text color */}
            <Head title="Howdy stranger!" />
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"> {/* Added dark mode for content background */}
                <ProfilePic />
                {/* Profile Information */}
                <div className="mt-6 border-t border-gray-200 dark:border-gray-600"> {/* Added dark mode border */}
                    <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 sm:col-span-2">
                            <p>
                                Curious human who loves bringing definition to ambiguity and solving complex problems.
                            </p>
                            <br />
                            <p>
                                Co-leader of a free fitness community in San Francisco.
                                <p>Would love to talk to you about running.</p>
                            </p>
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</dt>
                            <dd className="mt-1 text-sm leading-6 text-indigo-600 dark:text-indigo-400 sm:col-span-2 sm:mt-0">
                                <a href="https://www.linkedin.com/in/billkeuth/" target="_blank">View LinkedIn</a>
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Github</dt>
                            <dd className="mt-1 text-sm leading-6 text-indigo-600 dark:text-indigo-400 sm:col-span-2 sm:mt-0">
                                <a href="https://github.com/butteredxtoast" target="_blank">View GitHub</a>
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Instagram</dt>
                            <dd className="mt-1 text-sm leading-6 text-indigo-600 dark:text-indigo-400 sm:col-span-2 sm:mt-0">
                                <a href="https://www.instagram.com/butteredxtoast" target="_blank">View Instagram</a>
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Download contact info</dt>
                            <dd className="mt-1 text-sm leading-6 text-indigo-600 dark:text-indigo-400 sm:col-span-2 sm:mt-0">
                                <a href={route('vcard.download')} className="hover:underline" download>
                                    Download vCard
                                </a>
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0">
                            <div className="flex justify-center">
                                <PrimaryButton onClick={confirmUserDeletion}>Let's Connect</PrimaryButton>
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
        </div>
    );
}
