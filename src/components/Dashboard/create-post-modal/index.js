// @vendors
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @components
import ActionModal from '../../shared/action-modal';

// @actions
import { createPost } from '../../../store/actions/posts';

const buttonParams = {
    label: 'Create Post',
    variant: 'contained'
};

const modalParams = {
    title: 'Create'
};

const CreatePostModal = () => {
    const dispatch = useDispatch();

    const { closeModal, isLoading } = useSelector((state) => state.post.create);

    const handleSubmit = useCallback((values) => dispatch(createPost(values)));

    return (
        <ActionModal
            buttonParams={buttonParams}
            closeModal={closeModal}
            isLoading={isLoading}
            modalParams={modalParams}
            onSubmit={handleSubmit}
        />
    );
};

export default CreatePostModal;
