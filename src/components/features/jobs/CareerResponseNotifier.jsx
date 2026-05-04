import React, { useEffect } from 'react';
import { useAppContext } from '../../../context/useAppContext';
import { useNavigate } from 'react-router-dom';

const CareerResponseNotifier = () => {
    const { inquiries, user, showPopup, acknowledgeResponse } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        const unreadApp = inquiries.find(inq => 
            inq.email === user.email && 
            inq.subject?.includes('[JOB APP]') && 
            inq.unreadByCandidate
        );

        if (unreadApp) {
            showPopup({
                title: 'Career Update!',
                message: `You have a new response regarding your application for: ${unreadApp.subject.replace('[JOB APP]', '').trim()}`,
                type: 'success',
                onConfirm: () => {
                    acknowledgeResponse(unreadApp.id);
                    navigate('/profile');
                }
            });
        }
    }, [inquiries, user, showPopup, acknowledgeResponse, navigate]);

    return null;
};

export default CareerResponseNotifier;
