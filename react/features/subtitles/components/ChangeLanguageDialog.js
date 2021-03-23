// @flow

import React, {useState} from 'react';
import { connect } from 'react-redux';
import DropdownMenu, {
    DropdownItem,
    DropdownItemGroup
} from '@atlaskit/dropdown-menu';
import { Dialog } from '../../base/dialog';
import { translate } from '../../base/i18n';
import { getParticipants } from '../../base/participants';

import Header from './Header';

declare var APP: Object;


type Props = {

    /**
     * Invoked to obtain translated strings.
     */
    t: Function,

    /**
     * The currently selected language to display in the language select
     * dropdown.
     */
    currentLanguage: string,
};

type State = {

    /**
     * Whether or not the language select dropdown is open.
     */
    isTranscriptChangeOpen: boolean
};



function ChangeLanguage({t}: Props) {

    // this.state = {
    //         isTranscriptChangeOpen: false
    //     };

    // this._onTranscriptDropdownOpenChange
    //         = this._onTranscriptDropdownOpenChange.bind(this);

    /**
     * Callback invoked to toggle display of the transcript select dropdown.
     *
     * @param {Object} event - The event for opening or closing the dropdown.
     * @private
     * @returns {void}
     */

    // this.isTranscriptChangeOpen = this.isTranscriptChangeOpen.bind(this) 

    return (
        <Dialog
            customHeader = { Header }
            width = 'small'>
            <div className = 'change-language-dialog'>
                <div className = 'mock-atlaskit-label'>
                    { t('changeLanguage.transcription')}
                </div>
                <DropdownMenu 
                    // isOpen = { this.state.isTranscriptChangeOpen }
                    // onOpenChange = { this._onTranscriptDropdownOpenChange }
                    shouldFitContainer = { true }
                    // trigger = { 'this.state.showMe'
                    //     ? "true"
                    //     : 'false' }
                    trigger = "Helllo"
                    triggerType="button"
                        >
                    <DropdownItemGroup>
                        <DropdownItem 
                        isCompact
                        onClick = { () => {
                            APP.conference._room.setLocalParticipantProperty('transcription_language','en-US');
                            // currentLanguage = 'English';
                            // console.log(currentLanguage);
                            }
                            }>
                        English
                        </DropdownItem>
                        <DropdownItem 
                        isCompact
                        onClick = { () => {
                            APP.conference._room.setLocalParticipantProperty('transcription_language','ja-JP'); 
                            }
                            }>
                        Japanese
                        </DropdownItem>
                        <DropdownItem 
                        isCompact
                        onClick = { () => {
                            APP.conference._room.setLocalParticipantProperty('transcription_language','cmn-Hans-CN'); 
                            }
                            }>
                        Chinese
                        </DropdownItem>
                    </DropdownItemGroup>
            </DropdownMenu>
            </div>
        </Dialog>
    );
}

export default translate(ChangeLanguage);