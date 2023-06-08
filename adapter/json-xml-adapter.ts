import {JsonEditor} from "./json-editor";

export class JsonXmlAdapter {
    constructor(
        public jsonEditor: JsonEditor,
    ) {
    }

    public generateReportXml(): string {
        const jsonReport = this.jsonEditor.generateReportJson();

        // Convert JSON to XML
        return jsonReport + 'XML';
    }
}
