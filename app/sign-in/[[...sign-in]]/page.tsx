import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
    return (
        <div className="page flex items-center justify-center min-h-screen">
            <SignIn />
        </div>
    )
};
