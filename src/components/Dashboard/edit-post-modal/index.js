// @vendors
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// @components
import ActionModal from '../../shared/action-modal';

// @actions
import { updatePost } from '../../../store/actions/posts';

const buttonParams = {
    label: 'Edit',
    variant: 'text'
};

const modalParams = {
    title: 'Edit'
};

const EditPostModal = ({ id, isPostPinned, message }) => {
    const dispatch = useDispatch();

    const { closeModal, isLoading } = useSelector((state) => state.post.update);

    const handleSubmit = useCallback((value) => dispatch(updatePost(value, id)));

    return (
        <ActionModal
            buttonParams={buttonParams}
            closeModal={closeModal}
            isLoading={isLoading}
            isPostPinned={isPostPinned}
            message={message}
            modalParams={modalParams}
            onSubmit={handleSubmit}
        />
    );
};

EditPostModal.propTypes = {
    id: PropTypes.number.isRequired,
    isPostPinned: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
};

export default EditPostModal;
