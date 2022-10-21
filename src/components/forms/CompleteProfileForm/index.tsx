import { useUserDisplayName } from '@nhost/nextjs';

import ClaimUserNameProvider from '@/components/forms/AuthForms/ClaimUserNameProvider';
import CompleteProfileFormLayout from '@/components/forms/FormLayouts/CompleteProfileFormLayout';
export default function CompleteProfileForm() {
  const displayName = useUserDisplayName() || '';

  return (
    <CompleteProfileFormLayout
      title={`Hey ${displayName.split(' ')[0]}!`}
      subTitle='Claim your username.'
      maxWidth='max-w-xl'
    >
      <div className='px-4'>
        <ClaimUserNameProvider />
      </div>
    </CompleteProfileFormLayout>
  );
}
