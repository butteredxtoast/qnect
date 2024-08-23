export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:from-pink-400 hover:to-yellow-400 focus:from-pink-400 focus:to-yellow-400 active:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
