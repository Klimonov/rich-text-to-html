const markRenderer = (value, marks) => {
    let text = value
    if (!marks.length) return text
    marks.forEach((m) => {
        if (m.type === 'bold') text = `<strong>${text}</strong>`
        if (m.type === 'underline') text = `<u>${text}</u>`
        if (m.type === 'italic') text = `<i>${text}</i>`
        if (m.type === 'code') text = `<code>${text}</code>`
    })
    return text
}

const nodeContentRenderer = content => content.map(richTextToHtmlString).join('')

const richTextToHtmlString = ({ content, data, nodeType, value, marks }) => {
    switch (nodeType) {
        case 'hr':
            return '<hr />'
        case 'text':
            return markRenderer(value, marks)
        case 'document':
            return content.map(richTextToHtmlString)
        case 'paragraph':
            return `<p>${nodeContentRenderer(content)}</p>`
        case 'unordered-list':
            return `<ul>${nodeContentRenderer(content)}</ul>`
        case 'ordered-list':
            return `<ol>${nodeContentRenderer(content)}</ol>`
        case 'list-item':
            return `<li>${nodeContentRenderer(content)}</li>`
        case 'heading-1':
            return `<h1>${nodeContentRenderer(content)}</h1>`
        case 'heading-2':
            return `<h2>${nodeContentRenderer(content)}</h2>`
        case 'heading-3':
            return `<h3>${nodeContentRenderer(content)}</h3>`
        case 'heading-4':
            return `<h4>${nodeContentRenderer(content)}</h4>`
        case 'heading-5':
            return `<h5>${nodeContentRenderer(content)}</h5>`
        case 'heading-6':
            return `<h6>${nodeContentRenderer(content)}</h6>`
        case 'table-row':
            return `<tr>${nodeContentRenderer(content)}</tr>`
        case 'table-cell':
            return `<th>${nodeContentRenderer(content)}</th>`
        case 'table':
            return `<table>${nodeContentRenderer(content)}</table>`
        case 'blockquote':
            return `<blockquote>${nodeContentRenderer(content)}</blockquote>`
        case 'embedded-entry-block':
            return `<p>${nodeContentRenderer(data.target.fields.content.content)}</p>`
        case 'embedded-entry-inline':
            return `<div>${nodeContentRenderer(data.target.fields.content.content)}</div>`
        case 'entry-hyperlink':
            return `<div>${nodeContentRenderer(data.target.fields.content.content)}</div>`
        case 'hyperlink':
            return `<a href=${data.uri} target="_blank">${nodeContentRenderer(content)}</a>`
        case 'embedded-asset-block':
            return `<img alt="${data.target.fields.title}" src=https:${data.target.fields.file.url}>`
        case 'asset-hyperlink':
            return `<img alt="${data.target.fields.title}" src=https:${data.target.fields.file.url}>`
        default:
            return ''
    }
}

export default richTextToHtmlString
