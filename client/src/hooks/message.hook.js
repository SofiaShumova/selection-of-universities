import { useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';

export const useMessage = () => {
    const { addToast } = useToasts();
    return {
        errorMessage: useCallback((text = 'Error!') => {
            addToast(text, { appearance: 'error', autoDismiss: true });
        }),
        successMessage: useCallback((text = 'Success!') => {
            addToast(text, { appearance: 'success', autoDismiss: true });
        }),
        infoMessage: useCallback((text = 'Info!') => {
            addToast(text, { appearance: 'info', autoDismiss: true });
        }),
    };
};