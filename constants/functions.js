export const generatePillBgColor = (hex = "#000000") => {
    let color = hex.replace(/#/g, "")
    const r = parseInt(color.substr(0, 2), 16)
    const g = parseInt(color.substr(2, 2), 16)
    const b = parseInt(color.substr(4, 2), 16)
    const yiq = (r * 299 + g * 587 + b * 114)
    return yiq <= 128 ? "#FFFFFF0f" : "#0000000f"
}

export const generateTextColor = (hex = "#000000") => {
    let color = hex.replace(/#/g, "")
    const r = parseInt(color.substr(0, 2), 16)
    const g = parseInt(color.substr(2, 2), 16)
    const b = parseInt(color.substr(4, 2), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? "#000000" : "#FFFFFF"
}