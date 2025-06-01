import React, {useState} from "react"

export default function ContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        emmail: '',
        message: ''
    })

    const [status, setStatus] = useState('')
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        setError((prev) => ({
            ...prev,
            [name]: ''
        }))
    }
    
    return(
        <div></div>
    )
}