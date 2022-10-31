import ClaimUserNameProvider from '@/components/forms/AuthForms/ClaimUserNameProvider';
import CompleteProfileFormLayout from '@/components/forms/FormLayouts/CompleteProfileFormLayout';
export default function CompleteProfileForm() {
  const displayName = '';

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
