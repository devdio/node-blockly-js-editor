var soy = require('/Users/kumavis/Dropbox/Development/Node/node-blockly/lib/_soy/soyutils.js').soy;

// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {string}
 * @notypecheck
 */
codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%" height="100%"><tr><td><table><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon" onclick="Blockly.tabClick(this.id)">' + soy.$$escapeHtml(opt_ijData.MSG.blocks) + '</td><td class="tabmin">&nbsp;</td><td id="tab_javascript" class="taboff" onclick="Blockly.tabClick(this.id)">JavaScript</td><td class="tabmin">&nbsp;</td><td class="tabmax"><button title="' + soy.$$escapeHtml(opt_ijData.MSG.trashTooltip) + '" onclick="Blockly.discard(); Blockly.renderContent();"><img src=\'../../media/1x1.gif\' class="trash"></button></td></tr></table></td></tr><tr><td height="99%">' + codepage.toolbox(null, null, opt_ijData) + '<iframe id="content_blocks" src="lib/frame.html?' + soy.$$escapeHtml(opt_ijData.frameSrc) + '"></iframe><pre id="content_javascript"></pre><pre id="content_python"></pre><div id="content_xml"><textarea id="textarea_xml"></textarea></div></td></tr></table>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {string}
 * @notypecheck
 */
codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catControl) + '"><block type="controls_if"></block><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catLogic) + '"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catMath) + '"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catText) + '"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><block type="text"></block></value></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">' + soy.$$escapeHtml(opt_ijData.MSG.textVariable) + '</title></block></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><title name="VAR">' + soy.$$escapeHtml(opt_ijData.MSG.textVariable) + '</title></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><title name="VAR">' + soy.$$escapeHtml(opt_ijData.MSG.textVariable) + '</title></block></value></block><block type="text_changeCase"></block><block type="text_trim"></block><block type="text_print"></block><block type="text_prompt"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catLists) + '"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">' + soy.$$escapeHtml(opt_ijData.MSG.listVariable) + '</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">' + soy.$$escapeHtml(opt_ijData.MSG.listVariable) + '</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">' + soy.$$escapeHtml(opt_ijData.MSG.listVariable) + '</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">' + soy.$$escapeHtml(opt_ijData.MSG.listVariable) + '</title></block></value></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catColour) + '"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catVariables) + '" custom="VARIABLE"></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catProcedures) + '" custom="PROCEDURE"></category></xml>';
};


;; module.exports=codepage;