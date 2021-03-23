// @flow

import React from 'react';
import { connect } from 'react-redux';

import { openDialog } from '../../base/dialog';
import { translate } from '../../base/i18n';

import ChangeLanguageDialog from './ChangeLanguageDialog';

type Props = {

    /**
     * Open the list participants dialog.
     */
    openLanguageDialog: Function,

    /**
     * Invoked to obtain translated strings.
     */
    t: Function,
};

/**
 * Component meant to trigger showing the ChangeLanguageDialog.
 *
 * @returns {React$Element<any>}
 */
function ChangeLanguageTrigger({ t, openLanguageDialog }: Props) {
    /**
     * Handles opening the embed dialog.
     *
     * @returns {void}
     */
    function onClick() {
        openLanguageDialog(ChangeLanguageDialog);
    }

    return (
        <div
            className = 'change-language-trigger'
            onClick = { onClick }>
            {t('changeLanguage.title')}
        </div>
    );
}

const mapDispatchToProps = { openLanguageDialog: openDialog };

export default translate(connect(null, mapDispatchToProps)(ChangeLanguageTrigger));