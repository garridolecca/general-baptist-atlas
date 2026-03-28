export const eras = [
  { id: 1, name: "Origins in Amsterdam & England", shortName: "Origins", dateRange: "1609–1660", color: [201,168,76], hexColor: "#C9A84C", description: "John Smyth establishes the first Baptist church in Amsterdam (1609). Thomas Helwys brings Baptist principles to English soil, founding the first Baptist congregation in England at Spitalfields (1612). These General (Arminian) Baptists affirm universal atonement and believers' baptism.", keyTheme: "First Baptist churches" },
  { id: 2, name: "Growth & Persecution", shortName: "Persecution", dateRange: "1660–1689", color: [138,79,125], hexColor: "#8A4F7D", description: "The Clarendon Code drives General Baptists underground. John Bunyan writes 'Pilgrim's Progress' from Bedford Gaol. Thomas Grantham publishes 'Christianismus Primitivus', the most systematic General Baptist theology. Despite persecution, churches multiply across the Midlands and Southeast.", keyTheme: "Suffering and growth" },
  { id: 3, name: "Decline & Division", shortName: "Decline", dateRange: "1689–1770", color: [86,130,89], hexColor: "#568259", description: "The Toleration Act brings freedom but also complacency. Matthew Caffyn's heterodox Christology divides the General Assembly. Many churches drift toward Socinianism and Unitarianism. By mid-century, the denomination is in serious decline.", keyTheme: "Theological drift" },
  { id: 4, name: "New Connexion & Revival", shortName: "Revival", dateRange: "1770–1891", color: [163,75,75], hexColor: "#A34B4B", description: "Dan Taylor founds the New Connexion of General Baptists (1770), reviving evangelical Arminianism. Missionary expansion reaches India (Orissa) and Italy. In 1891, the New Connexion merges with the Baptist Union, ending the separate General Baptist tradition.", keyTheme: "Revival and union" },
];

export const eraIndex = {};
eras.forEach(e => { eraIndex[e.id] = e; });

export const locations = [
  { id: "amsterdam", name: "Amsterdam", modernName: "Amsterdam, Netherlands", region: "Netherlands", lat: 52.370, lng: 4.895, significance: "major", eras: [1], events: [
    { era: 1, order: 1, year: 1609, title: "First Baptist Church Founded", description: "John Smyth, a former Church of England clergyman, baptizes himself and his congregation in Amsterdam, establishing the first Baptist church. Smyth's group had fled England as Separatists. He adopts believer's baptism and Arminian theology.", figure: "John Smyth" },
  ]},
  { id: "gainsborough", name: "Gainsborough", modernName: "Gainsborough, Lincolnshire", region: "East Midlands", lat: 53.401, lng: -0.774, significance: "moderate", eras: [1], events: [
    { era: 1, order: 2, year: 1606, title: "Smyth's Separatist Congregation", description: "John Smyth gathers a Separatist congregation at Gainsborough Old Hall before fleeing to Amsterdam. The Gainsborough-Scrooby Separatists represent the roots of both Baptist and Pilgrim movements.", figure: "John Smyth" },
  ]},
  { id: "scrooby", name: "Scrooby", modernName: "Scrooby, Nottinghamshire", region: "East Midlands", lat: 53.395, lng: -1.059, significance: "moderate", eras: [1], events: [
    { era: 1, order: 3, year: 1607, title: "Separatist Origins", description: "The Separatist movement in the Scrooby-Gainsborough area produces both the Pilgrim Fathers (who go to Plymouth via Leiden) and John Smyth's Baptist congregation (which goes to Amsterdam).", figure: null },
  ]},
  { id: "spitalfields", name: "Spitalfields", modernName: "Spitalfields, London", region: "London", lat: 51.520, lng: -0.075, significance: "major", eras: [1], events: [
    { era: 1, order: 4, year: 1612, title: "First Baptist Church in England", description: "Thomas Helwys returns from Amsterdam and establishes the first Baptist church on English soil at Spitalfields. He publishes 'A Short Declaration of the Mystery of Iniquity', the first English-language plea for complete religious liberty.", figure: "Thomas Helwys" },
  ]},
  { id: "newgate", name: "Newgate Prison", modernName: "City of London", region: "London", lat: 51.516, lng: -0.102, significance: "moderate", eras: [1], events: [
    { era: 1, order: 5, year: 1613, title: "Helwys Imprisoned", description: "Thomas Helwys is arrested and imprisoned in Newgate for his writings advocating religious liberty. He dies in prison around 1616, a martyr for the cause of freedom of conscience.", figure: "Thomas Helwys" },
  ]},
  { id: "fenstanton", name: "Fenstanton", modernName: "Fenstanton, Cambridgeshire", region: "East", lat: 52.310, lng: -0.072, significance: "moderate", eras: [1], events: [
    { era: 1, order: 6, year: 1644, title: "Henry Denne's Ministry", description: "Henry Denne, a Cambridge-educated minister, establishes a General Baptist congregation at Fenstanton. During the Civil War, he serves as an army chaplain and spreads Baptist principles among Cromwell's soldiers.", figure: "Henry Denne" },
  ]},
  { id: "lincoln", name: "Lincoln", modernName: "Lincoln, Lincolnshire", region: "East Midlands", lat: 53.231, lng: -0.540, significance: "moderate", eras: [1], events: [
    { era: 1, order: 7, year: 1654, title: "General Baptist Assembly", description: "General Baptists organize their first national assembly, meeting in various Midlands locations. Lincoln and the surrounding area becomes a stronghold of General Baptist life.", figure: null },
  ]},
  { id: "canterbury", name: "Canterbury", modernName: "Canterbury, Kent", region: "Southeast", lat: 51.280, lng: 1.078, significance: "moderate", eras: [1], events: [
    { era: 1, order: 8, year: 1646, title: "Kent General Baptists", description: "General Baptist churches spread rapidly across Kent. Canterbury hosts a thriving congregation that maintains connections with continental Anabaptists across the Channel.", figure: null },
  ]},
  { id: "bedford", name: "Bedford", modernName: "Bedford, Bedfordshire", region: "East", lat: 52.136, lng: -0.461, significance: "major", eras: [1, 2], events: [
    { era: 1, order: 9, year: 1650, title: "Bedford Meeting Established", description: "A gathered church forms in Bedford with both Baptist and Independent members. John Gifford serves as its first pastor, practicing open communion — a distinctive that Bunyan would later champion.", figure: null },
    { era: 2, order: 1, year: 1660, title: "Bunyan Imprisoned", description: "John Bunyan is arrested for unlicensed preaching and spends 12 years in Bedford Gaol. During imprisonment he writes 'The Pilgrim's Progress' (1678), the most widely read allegory in English literature.", figure: "John Bunyan" },
  ]},
  { id: "chatham", name: "Chatham", modernName: "Chatham, Kent", region: "Southeast", lat: 51.370, lng: 0.522, significance: "moderate", eras: [2], events: [
    { era: 2, order: 2, year: 1668, title: "General Baptist Church", description: "A General Baptist church is established at Chatham, part of the strong southeastern network of congregations in Kent, Sussex, and Essex.", figure: null },
  ]},
  { id: "aylesbury", name: "Aylesbury", modernName: "Aylesbury, Buckinghamshire", region: "Southeast", lat: 51.816, lng: -0.812, significance: "moderate", eras: [2], events: [
    { era: 2, order: 3, year: 1675, title: "Buckinghamshire General Baptists", description: "General Baptist churches flourish in Buckinghamshire. Thomas Grantham visits and strengthens these congregations as part of his tireless itinerant ministry across England.", figure: "Thomas Grantham" },
  ]},
  { id: "norwich", name: "Norwich", modernName: "Norwich, Norfolk", region: "East", lat: 52.630, lng: 1.297, significance: "moderate", eras: [2], events: [
    { era: 2, order: 4, year: 1680, title: "East Anglian General Baptists", description: "Norwich and East Anglia develop a distinctive General Baptist tradition, partly influenced by earlier Dutch Anabaptist connections through the textile trade.", figure: null },
  ]},
  { id: "boston-lincs", name: "Boston", modernName: "Boston, Lincolnshire", region: "East Midlands", lat: 52.979, lng: -0.027, significance: "moderate", eras: [1], events: [
    { era: 1, order: 10, year: 1607, title: "Separatist Roots", description: "Boston, Lincolnshire, with its tradition of dissent going back to the Pilgrim Fathers' attempted departure, becomes fertile ground for General Baptist churches.", figure: null },
  ]},
  { id: "warwick", name: "Warwick", modernName: "Warwick, Warwickshire", region: "West Midlands", lat: 52.282, lng: -1.585, significance: "moderate", eras: [1], events: [
    { era: 1, order: 11, year: 1655, title: "Midlands General Baptists", description: "Warwick and the surrounding Midlands towns develop strong General Baptist congregations. The Midlands becomes the heartland of the movement.", figure: null },
  ]},
  { id: "whitechapel", name: "Whitechapel", modernName: "Whitechapel, London", region: "London", lat: 51.516, lng: -0.059, significance: "moderate", eras: [2], events: [
    { era: 2, order: 5, year: 1685, title: "London General Baptist Meetings", description: "General Baptist congregations meet throughout East London. The General Assembly of General Baptists often convenes in London, coordinating the denomination's affairs.", figure: null },
  ]},
  { id: "tiverton", name: "Tiverton", modernName: "Tiverton, Devon", region: "Southwest", lat: 50.902, lng: -3.488, significance: "moderate", eras: [2], events: [
    { era: 2, order: 6, year: 1670, title: "Western General Baptists", description: "General Baptist churches extend into the West Country, with Tiverton as a center. These western churches often maintain more orthodox theology than some eastern congregations.", figure: null },
  ]},
  { id: "melbourne", name: "Melbourne", modernName: "Melbourne, Derbyshire", region: "East Midlands", lat: 52.823, lng: -1.421, significance: "moderate", eras: [3], events: [
    { era: 3, order: 1, year: 1720, title: "Midlands Stronghold", description: "Melbourne, Derbyshire, maintains one of the strongest General Baptist congregations through the period of decline. The Midlands churches prove more resistant to Socinian drift than southeastern ones.", figure: null },
  ]},
  { id: "nottingham", name: "Nottingham", modernName: "Nottingham", region: "East Midlands", lat: 52.950, lng: -1.155, significance: "moderate", eras: [3], events: [
    { era: 3, order: 2, year: 1730, title: "General Baptist Decline", description: "Nottingham's General Baptist church reflects the broader denominational decline. Theological controversy over the person of Christ and the drift toward Unitarianism weakens many congregations.", figure: null },
  ]},
  { id: "leicester", name: "Leicester", modernName: "Leicester", region: "East Midlands", lat: 52.634, lng: -1.133, significance: "moderate", eras: [3], events: [
    { era: 3, order: 3, year: 1745, title: "Assembly Struggles", description: "The General Assembly meets in Leicester and wrestles with the Caffyn controversy. Matthew Caffyn's denial of Christ's full humanity divides the denomination for decades.", figure: "Matthew Caffyn" },
  ]},
  { id: "spalding", name: "Spalding", modernName: "Spalding, Lincolnshire", region: "East Midlands", lat: 52.787, lng: -0.153, significance: "moderate", eras: [3], events: [
    { era: 3, order: 4, year: 1750, title: "Lincolnshire Persistence", description: "General Baptist churches in the Fens around Spalding persist through the period of decline, maintaining worship and community even as numbers dwindle.", figure: null },
  ]},
  { id: "barton", name: "Barton-in-the-Beans", modernName: "Barton-in-the-Beans, Leicestershire", region: "East Midlands", lat: 52.640, lng: -1.417, significance: "major", eras: [4], events: [
    { era: 4, order: 1, year: 1770, title: "Dan Taylor Founds the New Connexion", description: "Dan Taylor, a former Methodist and coal miner turned preacher, founds the New Connexion of General Baptists at Barton-in-the-Beans. The New Connexion revives evangelical Arminian theology and rejects the Socinian drift of the old General Assembly.", figure: "Dan Taylor" },
  ]},
  { id: "loughborough", name: "Loughborough", modernName: "Loughborough, Leicestershire", region: "East Midlands", lat: 52.773, lng: -1.206, significance: "moderate", eras: [4], events: [
    { era: 4, order: 2, year: 1798, title: "New Connexion Growth", description: "Loughborough becomes a center of New Connexion activity. The denomination establishes an academy here for training ministers, bringing intellectual rigor to the revived movement.", figure: null },
  ]},
  { id: "epworth", name: "Epworth", modernName: "Epworth, Lincolnshire", region: "East Midlands", lat: 53.523, lng: -0.824, significance: "moderate", eras: [4], events: [
    { era: 4, order: 3, year: 1780, title: "New Connexion in the North", description: "The New Connexion spreads to northern Lincolnshire and Yorkshire. Epworth, famous as the birthplace of the Wesleys, also becomes home to a thriving General Baptist congregation.", figure: null },
  ]},
  { id: "wadsworth", name: "Wadsworth", modernName: "Wadsworth, West Yorkshire", region: "North", lat: 53.728, lng: -1.951, significance: "moderate", eras: [3], events: [
    { era: 3, order: 5, year: 1760, title: "Northern General Baptists", description: "General Baptist churches in Yorkshire maintain a distinct northern identity. Wadsworth and the surrounding Pennine valleys provide refuge for dissenting worship.", figure: null },
  ]},
  { id: "birchcliffe", name: "Birchcliffe", modernName: "Hebden Bridge, West Yorkshire", region: "North", lat: 53.728, lng: -2.010, significance: "moderate", eras: [4], events: [
    { era: 4, order: 4, year: 1790, title: "Northern Revival", description: "Birchcliffe Baptist Chapel, perched above Hebden Bridge, becomes part of the New Connexion's northern network. The chapel, built in 1764, continues to serve worshippers today.", figure: null },
  ]},
  { id: "dover", name: "Dover", modernName: "Dover, Kent", region: "Southeast", lat: 51.128, lng: 1.313, significance: "moderate", eras: [1], events: [
    { era: 1, order: 12, year: 1643, title: "Channel Connections", description: "Dover's General Baptist church maintains connections with continental Anabaptists across the English Channel. The port town serves as a gateway for the exchange of ideas between English and Dutch Baptists.", figure: null },
  ]},
  { id: "orissa", name: "Orissa", modernName: "Odisha, India", region: "India", lat: 20.465, lng: 85.883, significance: "major", eras: [4], events: [
    { era: 4, order: 5, year: 1822, title: "General Baptist Mission to India", description: "The New Connexion sends missionaries to Orissa (now Odisha), India. Amos Sutton and others establish churches, schools, and printing presses. The Orissa mission becomes the New Connexion's greatest overseas achievement.", figure: "Amos Sutton" },
  ]},
  { id: "rome", name: "Rome", modernName: "Rome, Italy", region: "Italy", lat: 41.903, lng: 12.496, significance: "moderate", eras: [4], events: [
    { era: 4, order: 6, year: 1866, title: "Italian Mission", description: "The New Connexion establishes mission work in Italy following Italian unification. General Baptist missionaries work in Rome and other cities, planting small evangelical congregations.", figure: null },
  ]},
  { id: "chesham", name: "Chesham", modernName: "Chesham, Buckinghamshire", region: "Southeast", lat: 51.705, lng: -0.611, significance: "moderate", eras: [2], events: [
    { era: 2, order: 7, year: 1672, title: "Buckinghamshire Baptists", description: "Chesham's General Baptist church benefits from the Declaration of Indulgence (1672). The congregation becomes one of the most established in the Chilterns region.", figure: null },
  ]},
  { id: "fleet", name: "Fleet", modernName: "Fleet, Lincolnshire", region: "East Midlands", lat: 52.804, lng: 0.024, significance: "moderate", eras: [2], events: [
    { era: 2, order: 8, year: 1665, title: "Fenland General Baptists", description: "General Baptist congregations flourish in the Lincolnshire Fens. Fleet and the surrounding villages maintain Baptist worship through the period of persecution.", figure: null },
  ]},
  { id: "gosberton", name: "Gosberton", modernName: "Gosberton, Lincolnshire", region: "East Midlands", lat: 52.870, lng: -0.145, significance: "moderate", eras: [2], events: [
    { era: 2, order: 9, year: 1670, title: "Fen Baptist Church", description: "Gosberton's General Baptist church serves the agricultural communities of the Fens, where Baptist principles take deep root among independent-minded farming families.", figure: null },
  ]},
  { id: "lutterworth", name: "Lutterworth", modernName: "Lutterworth, Leicestershire", region: "East Midlands", lat: 52.453, lng: -1.200, significance: "moderate", eras: [1], events: [
    { era: 1, order: 13, year: 1640, title: "Wycliffe's Legacy", description: "Lutterworth, where John Wycliffe had served as rector two centuries earlier, sees General Baptist activity. The connection between Lollard dissent and later Baptist movements runs through communities like this.", figure: null },
  ]},
];

export const routes = [
  { era: 1, path: [[4.895, 52.370], [-0.075, 51.520], [-0.774, 53.401], [-1.059, 53.395]] },
  { era: 1, path: [[-0.075, 51.520], [-0.461, 52.136], [-0.540, 53.231], [-1.585, 52.282]] },
  { era: 2, path: [[-0.461, 52.136], [-0.075, 51.520], [0.522, 51.370], [1.078, 51.280]] },
  { era: 3, path: [[-1.421, 52.823], [-1.155, 52.950], [-1.133, 52.634], [-0.153, 52.787]] },
  { era: 4, path: [[-1.417, 52.640], [-1.206, 52.773], [-0.824, 53.523], [-2.010, 53.728]] },
  { era: 4, path: [[-1.417, 52.640], [85.883, 20.465]] },
];

export const figures = [
  { id: "smyth", name: "John Smyth", years: "c. 1570–1612", role: "Founder of the First Baptist Church", bio: "Cambridge-educated minister who led a Separatist congregation from Gainsborough to Amsterdam, where he established the first Baptist church in 1609 by baptizing himself and his congregation." },
  { id: "helwys", name: "Thomas Helwys", years: "c. 1575–c. 1616", role: "First Baptist Church in England", bio: "Returned from Amsterdam to establish the first Baptist church in England at Spitalfields (1612). Author of the first English plea for religious liberty. Died in Newgate Prison." },
  { id: "murton", name: "John Murton", years: "c. 1585–c. 1626", role: "Helwys's Successor", bio: "Succeeded Helwys as leader of the Spitalfields church. Continued to advocate for religious liberty while maintaining the congregation through persecution." },
  { id: "denne", name: "Henry Denne", years: "d. 1660", role: "Army Chaplain & Evangelist", bio: "Cambridge-educated minister who spread General Baptist principles as a Civil War army chaplain. His preaching converted soldiers who carried Baptist ideas across England." },
  { id: "grantham", name: "Thomas Grantham", years: "1634–1692", role: "General Baptist Theologian", bio: "Most significant General Baptist theologian of the 17th century. His 'Christianismus Primitivus' (1678) provided the most systematic defense of General Baptist doctrine." },
  { id: "bunyan", name: "John Bunyan", years: "1628–1688", role: "Author of Pilgrim's Progress", bio: "Bedford tinker turned preacher who spent 12 years in prison for unlicensed preaching. His 'Pilgrim's Progress' became the most widely read book in English after the Bible." },
  { id: "caffyn", name: "Matthew Caffyn", years: "1628–1714", role: "Controversial General Baptist", bio: "Long-serving General Baptist minister whose heterodox views on Christ's humanity divided the denomination. The 'Caffyn controversy' contributed to the theological decline of the old General Baptists." },
  { id: "griffith", name: "John Griffith", years: "1622–1700", role: "General Baptist Leader", bio: "Prominent General Baptist minister in London who helped organize the General Assembly and coordinate Baptist life across England." },
  { id: "taylor", name: "Dan Taylor", years: "1738–1816", role: "New Connexion Founder", bio: "Yorkshire coal miner turned preacher who founded the New Connexion of General Baptists (1770), reviving evangelical Arminian theology and rescuing the General Baptist tradition from Socinian decline." },
  { id: "deacon", name: "Samuel Deacon", years: "1746–1816", role: "Barton Hymn Writer", bio: "Minister at Barton-in-the-Beans and prolific hymn writer. His hymns became staples of New Connexion worship and reflected the revived spiritual life of the movement." },
  { id: "ward", name: "William Ward", years: "1769–1823", role: "Serampore Mission", bio: "Printer and missionary who served at the Serampore Mission in India. Though primarily associated with the Particular Baptists, his work inspired General Baptist missionary efforts." },
  { id: "sutton", name: "Amos Sutton", years: "1802–1854", role: "Orissa Mission Pioneer", bio: "New Connexion missionary who led the Orissa mission in India for over 25 years. Translated Scripture, established schools, and built the foundation of Baptist work in Odisha." },
  { id: "clifford", name: "John Clifford", years: "1836–1923", role: "General Baptist Union Leader", bio: "Most prominent General Baptist of the late 19th century. Led the Westbourne Park Chapel and championed social reform, education, and the 1891 union with the Baptist Union." },
  { id: "goadby", name: "Thomas Goadby", years: "1836–1889", role: "New Connexion Principal", bio: "Principal of the General Baptist College at Chilwell. His scholarship and leadership helped raise the intellectual standard of New Connexion ministry." },
  { id: "wright", name: "Joseph Wright", years: "d. 1702", role: "Defender of Orthodoxy", bio: "General Baptist minister who opposed Matthew Caffyn's heterodox Christology, fighting to maintain orthodox theology within the denomination during its most divisive period." },
];

export const timeline = [
  { year: 1606, era: 1, title: "Smyth's Separatists", locationId: "gainsborough", locationName: "Gainsborough" },
  { year: 1609, era: 1, title: "First Baptist Church", locationId: "amsterdam", locationName: "Amsterdam" },
  { year: 1612, era: 1, title: "First English Baptist Church", locationId: "spitalfields", locationName: "Spitalfields" },
  { year: 1613, era: 1, title: "Helwys Imprisoned", locationId: "newgate", locationName: "Newgate" },
  { year: 1644, era: 1, title: "Denne at Fenstanton", locationId: "fenstanton", locationName: "Fenstanton" },
  { year: 1650, era: 1, title: "Bedford Meeting", locationId: "bedford", locationName: "Bedford" },
  { year: 1654, era: 1, title: "General Assembly", locationId: "lincoln", locationName: "Lincoln" },
  { year: 1660, era: 2, title: "Bunyan Imprisoned", locationId: "bedford", locationName: "Bedford" },
  { year: 1670, era: 2, title: "Western Expansion", locationId: "tiverton", locationName: "Tiverton" },
  { year: 1675, era: 2, title: "Grantham's Ministry", locationId: "aylesbury", locationName: "Aylesbury" },
  { year: 1680, era: 2, title: "East Anglian Baptists", locationId: "norwich", locationName: "Norwich" },
  { year: 1720, era: 3, title: "Midlands Stronghold", locationId: "melbourne", locationName: "Melbourne" },
  { year: 1730, era: 3, title: "Denominational Decline", locationId: "nottingham", locationName: "Nottingham" },
  { year: 1745, era: 3, title: "Caffyn Controversy", locationId: "leicester", locationName: "Leicester" },
  { year: 1770, era: 4, title: "New Connexion Founded", locationId: "barton", locationName: "Barton-in-the-Beans" },
  { year: 1798, era: 4, title: "Academy at Loughborough", locationId: "loughborough", locationName: "Loughborough" },
  { year: 1822, era: 4, title: "Orissa Mission", locationId: "orissa", locationName: "Orissa, India" },
  { year: 1866, era: 4, title: "Italian Mission", locationId: "rome", locationName: "Rome" },
];