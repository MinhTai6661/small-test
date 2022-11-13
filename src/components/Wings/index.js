
import classNames from 'classnames/bind'
import styles from './Wings.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)
function Wings({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAADgAAAAA0Z7wIAAABxUlEQVRIDe2WUWrcMBCGf82MbcqmhT6U9gzpjXOEzWuukRNkaUopLaWBlIRmd23NqL9ks6RvWyjkZWVkSaMZ+fPgX3Jar9f6EdDzd7/lJ1Zm+V51pbp9nExfiYqzRtJURFOXdBqz5cg6sJ9K0oyw2npx7XS2gePENR2Fc64AxzLPeVRbKAT0SRr0AaKthebDOdoL/URxm0opgusL/Tq+tWEPtddQHR9UsujuaTIZFsCegBU0xgNUBatXBfJM0AbohKWNgIkPDwLqM8AK06DKDAiZ4YJAMyAYW1p8IG65zqmcMvCiGaDYjiulrBWbM/vx6c6G3rstRnuD3vbIpoJu3DsFpSZUtWd0qaqblWI1d44T1VtVTVsk7gdNvWLNHuiqcKg2C4AqR0ehVL/PchwevS6Bzc0G7z/MEWdsnpbg3W7pjMA0+bOX5nNayUtbG+4qrVShzsXh7FCzdVjiEK/cYmaP0/2UgZfLwOGD/F8I/K4V11fDr8e7fvQ8WKe9Rww8C3svpR6cvQSreE9RDJHzwHOattLGxj5KoS9jVL8cr+J/eIPv+IYH26YVY/bj9HcSprrQhByzWlXkoFQV/losam5g3J/+ACsgzVYG6w9XAAAAAElFTkSuQmCC' />
            <div className={cx('content')}>
                {children}
            </div>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAADgAAAAA0Z7wIAAAB2UlEQVRIDe1Wu24VMRA9Y3v3kkRCgKAIBQqUafMtXAno80EgvoJPAL6BioqUaSkWQmC9Mx7O+C5SOgqQENKdXXuOz44fGvnYK9O7ly+a4bEkUcDNPVn34vTJEkSdPBrMV87JpY4ZL9lAzH6aw8dDLmKjFCTteHFrqXRuQCHX2CaXm9n3Zgc+qGUzLWrz5oF9uYR9BKxwFUicjS5Qf7kYZEnOgR2NjeAzXfCkXQQe9GpcnMfnbqVw2IWBow/sX81BBhgHQGe6zHC2a48GroGjw423wgHHu8DX4C9x+uTIT8/O13WtsXu3z8A/yIBMb18957Y/gWAJdXINVG0ot2lXsGTueGLPi+cd70bvxpikKRf2M80l+idtlWU0bT+yDshqoyy3UPUzRj25x7EO7+ubD1e63W5Dn7+10NPOujRFfhE5Jc7HwjMozKQJAt4YtlDS/SMr5cGzLEkwsjEDm7E4RkqYdsVyJwDt4tMFnu7gvt5n4L/IgEzvXz9zs0cuaebVVr1JTRlzcyH2mkqZW6M2ufVbypU3aM0is+VSVa3eZj/dLPX6IM/HZ+eziNyQ0Z/noIs2rtUAudcE6xRdyRonD1XKv4nwQ8lUZkg1lDr4N/ppAo7xsHN/u/oJyr8cbRoH3z8AAAAASUVORK5CYII=' />
     
        </div>
    )
}

Wings.propTypes = {}

export default Wings
