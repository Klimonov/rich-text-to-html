# rich-text-to-html

HTML renderer for the Contentful rich text field type **with Embed**.

## Installation
```sh
$ npm install rich-text-to-html
```  

## Usage
```javascript
import richTextToHtmlString from 'rich-text-to-html';
const document = {
    nodeType: "document",
    data: {},
    content: [
        {
            nodeType: "heading-2",
            content: [
                {
                    nodeType: "text",
                    value: "Block title",
                    marks: [],
                    data: {}
                }
            ],
            data: {}
        },
        {
            nodeType: "paragraph",
            content: [
                {
                    nodeType: "text",
                    value: "custom text",
                    marks: [],
                    data: {}
                }
            ],
            data: {}
        },
        {
            nodeType: "embedded-asset-block",
            content: [],
            data: {
                target: {
                    metadata: {
                        tags: []
                    },
                    sys: {
                        space: {
                            sys: {
                                type: "Link",
                                linkType: "Space",
                            }
                        },
                        type: "Asset",
                        createdAt: "2022-03-03T13:21:41.509Z",
                        updatedAt: "2022-03-03T13:21:41.509Z",
                        environment: {
                            sys: {
                                id: "master",
                                type: "Link",
                                linkType: "Environment"
                            }
                        },
                        revision: 1,
                        locale: "en-US"
                    },
                    fields: {
                        title: "Banner",
                        description: "",
                        file: {
                            url: "//images.ctfassets.net/.../image.webp",
                            details: {
                                size: 16652,
                                image: {
                                    width: 940,
                                    height: 150
                                }
                            },
                            fileName: "image.webp",
                            contentType: "image/webp"
                        }
                    }
                }
            }
        },
        {
            nodeType: "paragraph",
            content: [
                {
                    nodeType: "text",
                    value: "custom text",
                    marks: [],
                    data: {}
                }
            ],
            data: {}
        }
    ]
};
richTextToHtmlString(document); // -> <h2>Casino ads</h2><p>custom text</p><img alt="Banner" src="https://images.ctfassets.net/.../image.webp"><p>custom text</p>
```
<br>

