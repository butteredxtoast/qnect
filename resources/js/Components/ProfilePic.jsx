import md5 from 'crypto-js/md5';

export default function ProfilePic() {
    const email = 'bill@hey.com';

    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?s=150`;

    return (
        <div className="px-4 sm:px-0 text-center mb-6">
            <img
                className="h-32 w-32 rounded-full mx-auto"
                src={gravatarUrl}
                alt="Profile Picture"
            />
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Bill Keuth</h2>
            <p className="mt-1 text-lg text-gray-600">Software Developer</p>
            <p className="mt-1 text-sm text-gray-500">bill@hey.com</p>
        </div>
    );
}
