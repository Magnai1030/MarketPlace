import React, { useRef, useEffect, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import CodeNotificationContainer from '@containers/CodeNotificationContainer';
import ImageNotificationContainer from '@containers/ImageNotificationContainer';
import Modal from '@custom/Modal';

export enum NotificationType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    INFO = 'INFO',
    OFFER = 'OFFER',
    QUESTION = 'QUESTION',
}

export type NotificationProps = {
    isLoad: boolean;
    onClose: () => void;
};

const NotificationModal: React.FC<NotificationProps> = ({
    isLoad,
    onClose,
}) => {
    const [type, setType] = useState<NotificationType>(NotificationType.CODE);
    const modalizeRef = useRef<Modalize>(null);

    useEffect(() => {
        if (modalizeRef.current) {
            if (isLoad) {
                modalizeRef.current.open();
            } else {
                modalizeRef.current.close();
            }
        }
    }, [isLoad]);

    return (
        <Modal
            modalizeRef={modalizeRef}
            onPressClose={onClose}
            contentHeight={true}
            title={'CONGRATULATIONS'}
            isRenderClose={true}>
            {type === NotificationType.CODE ? (
                <CodeNotificationContainer
                    title={'Voucher Code'}
                    description={
                        'It is a long established fact that a reader will be distracted by the readable.'
                    }
                    code={'AJSDKLD'}
                />
            ) : (
                <ImageNotificationContainer
                    image={'https://unsplash.it/400/400?image=1'}
                />
            )}
        </Modal>
    );
};

export default NotificationModal;
