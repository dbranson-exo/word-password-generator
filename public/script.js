// Common words for password generation (same as words.js)
// Expanded dictionary with 4600+ words for maximum entropy and variety
// Based on Google's 10,000 most common English words, filtered for memorability
const commonWords = [
  // Most common words (top 100 from Google's frequency analysis)
  'the', 'of', 'and', 'to', 'a', 'in', 'for', 'is', 'on', 'that',
  'by', 'this', 'with', 'i', 'you', 'it', 'not', 'or', 'be', 'are',
  'from', 'at', 'as', 'your', 'all', 'have', 'new', 'more', 'an', 'was',
  'we', 'will', 'home', 'can', 'us', 'about', 'if', 'page', 'my', 'has',
  'search', 'free', 'but', 'our', 'one', 'other', 'do', 'no', 'information', 'time',
  'they', 'site', 'he', 'up', 'may', 'what', 'which', 'their', 'news', 'out',
  'use', 'any', 'there', 'see', 'only', 'so', 'his', 'when', 'contact', 'here',
  'business', 'who', 'web', 'also', 'now', 'help', 'get', 'pm', 'view', 'online',
  'c', 'e', 'first', 'am', 'been', 'would', 'how', 'were', 'me', 's',
  'services', 'some', 'these', 'click', 'its', 'like', 'service', 'x', 'than', 'find',
  'price', 'date', 'back', 'top', 'people', 'had', 'list', 'name', 'just', 'over',
  'state', 'year', 'day', 'into', 'email', 'two', 'health', 'n', 'world', 're',
  'next', 'used', 'go', 'b', 'work', 'last', 'most', 'products', 'music', 'buy',
  'data', 'make', 'them', 'should', 'product', 'system', 'post', 'her', 'city', 't',
  'add', 'policy', 'number', 'such', 'please', 'available', 'copyright', 'support', 'message', 'after',
  'best', 'software', 'then', 'jan', 'good', 'video', 'well', 'd', 'where', 'info',
  'rights', 'public', 'books', 'high', 'school', 'through', 'm', 'each', 'links', 'she',
  'review', 'years', 'order', 'very', 'privacy', 'book', 'items', 'company', 'r', 'read',
  'group', 'sex', 'need', 'many', 'user', 'said', 'de', 'does', 'set', 'under',
  'general', 'research', 'university', 'january', 'mail', 'full', 'map', 'reviews', 'program', 'life',
  'know', 'games', 'way', 'days', 'management', 'p', 'part', 'could', 'great', 'united',
  'hotel', 'real', 'f', 'item', 'international', 'center', 'ebay', 'must', 'store', 'travel',
  'comments', 'made', 'development', 'report', 'off', 'member', 'details', 'line', 'terms', 'before',
  'hotels', 'did', 'send', 'right', 'type', 'because', 'local', 'those', 'using', 'results',
  'office', 'education', 'national', 'car', 'design', 'take', 'posted', 'internet', 'address', 'community',
  'within', 'states', 'area', 'want', 'phone', 'dvd', 'shipping', 'reserved', 'subject', 'between',
  'forum', 'family', 'l', 'long', 'based', 'w', 'code', 'show', 'o', 'even', 'black',
  'check', 'special', 'prices', 'website', 'index', 'being', 'women', 'much', 'sign', 'file',
  'link', 'open', 'today', 'technology', 'south', 'case', 'project', 'same', 'pages', 'uk',
  'version', 'section', 'own', 'found', 'sports', 'house', 'related', 'security', 'both', 'g',
  'county', 'american', 'photo', 'game', 'members', 'power', 'while', 'care', 'network', 'down',
  'computer', 'systems', 'three', 'total', 'place', 'end', 'following', 'download', 'h', 'him',
  'without', 'per', 'access', 'think', 'north', 'resources', 'current', 'posts', 'big', 'media',
  'law', 'control', 'water', 'history', 'pictures', 'size', 'art', 'personal', 'since', 'including',
  'guide', 'shop', 'directory', 'board', 'location', 'change', 'white', 'text', 'small', 'rating',
  'rate', 'government', 'children', 'during', 'usa', 'return', 'students', 'v', 'shopping', 'account',
  'times', 'sites', 'level', 'digital', 'profile', 'previous', 'form', 'events', 'love', 'old',
  'john', 'main', 'call', 'hours', 'image', 'department', 'title', 'description', 'non', 'k',
  'y', 'insurance', 'another', 'why', 'shall', 'property', 'class', 'cd', 'still', 'money',
  'quality', 'every', 'listing', 'content', 'country', 'private', 'little', 'visit', 'save', 'tools',
  'low', 'reply', 'customer', 'december', 'compare', 'movies', 'include', 'college', 'value', 'article',
  'york', 'man', 'card', 'jobs', 'provide', 'j', 'food', 'source', 'author', 'different',
  'press', 'u', 'learn', 'sale', 'around', 'print', 'course', 'job', 'canada', 'process',
  'teen', 'room', 'stock', 'training', 'too', 'credit', 'point', 'join', 'science', 'men',
  'categories', 'advanced', 'west', 'sales', 'look', 'english', 'left', 'team', 'estate', 'box',
  'conditions', 'select', 'windows', 'photos', 'gay', 'thread', 'week', 'category', 'note', 'live',
  'large', 'gallery', 'table', 'register', 'however', 'june', 'october', 'november', 'market', 'library',
  'really', 'action', 'start', 'series', 'model', 'features', 'air', 'industry', 'plan', 'human',
  'provided', 'tv', 'yes', 'required', 'second', 'hot', 'accessories', 'cost', 'movie', 'forums',
  'march', 'la', 'september', 'better', 'say', 'questions', 'july', 'yahoo', 'going', 'medical',
  'test', 'friend', 'come', 'dec', 'server', 'pc', 'study', 'application', 'cart', 'staff',
  'articles', 'san', 'feedback', 'again', 'play', 'looking', 'issues', 'april', 'never', 'users',
  'complete', 'street', 'topic', 'comment', 'financial', 'things', 'working', 'against', 'standard', 'tax',
  'person', 'below', 'mobile', 'less', 'got', 'blog', 'party', 'payment', 'equipment', 'login',
  'student', 'let', 'programs', 'offers', 'legal', 'above', 'recent', 'park', 'stores', 'side',
  'act', 'problem', 'red', 'give', 'memory', 'performance', 'social', 'q', 'august', 'quote',
  'language', 'story', 'sell', 'options', 'experience', 'rates', 'create', 'key', 'body', 'young',
  'america', 'important', 'field', 'few', 'east', 'paper', 'single', 'ii', 'age', 'activities',
  'club', 'example', 'girls', 'additional', 'password', 'z', 'latest', 'something', 'road', 'gift',
  'question', 'changes', 'night', 'ca', 'hard', 'texas', 'oct', 'pay', 'four', 'poker', 'status',
  'browse', 'issue', 'range', 'building', 'seller', 'court', 'february', 'always', 'result', 'audio',
  'light', 'write', 'war', 'nov', 'offer', 'blue', 'groups', 'al', 'easy', 'given',
  'files', 'event', 'release', 'analysis', 'request', 'fax', 'china', 'making', 'picture', 'needs',
  'possible', 'might', 'professional', 'yet', 'month', 'major', 'star', 'areas', 'future', 'space',
  'committee', 'hand', 'sun', 'cards', 'problems', 'london', 'washington', 'meeting', 'rss', 'become',
  'interest', 'id', 'child', 'keep', 'enter', 'california', 'share', 'similar', 'garden', 'schools',
  'million', 'added', 'reference', 'companies', 'listed', 'baby', 'learning', 'energy', 'run', 'delivery',
  'net', 'popular', 'term', 'film', 'stories', 'put', 'computers', 'journal', 'reports', 'co',
  'try', 'welcome', 'central', 'images', 'president', 'notice', 'god', 'original', 'head', 'radio',
  'until', 'cell', 'color', 'self', 'council', 'away', 'includes', 'track', 'australia', 'discussion',
  'archive', 'once', 'others', 'entertainment', 'agreement', 'format', 'least', 'society', 'months', 'log',
  'safety', 'friends', 'sure', 'faq', 'trade', 'edition', 'cars', 'messages', 'marketing', 'tell',
  'further', 'updated', 'association', 'able', 'having', 'provides', 'david', 'fun', 'already', 'green',
  'studies', 'close', 'common', 'drive', 'specific', 'several', 'gold', 'feb', 'living', 'sep',
  'collection', 'called', 'short', 'arts', 'lot', 'ask', 'display', 'limited', 'powered', 'solutions',
  'means', 'director', 'daily', 'beach', 'past', 'natural', 'whether', 'due', 'et', 'electronics',
  'five', 'upon', 'period', 'planning', 'database', 'says', 'official', 'weather', 'mar', 'land',
  'average', 'done', 'technical', 'window', 'france', 'pro', 'region', 'island', 'record', 'direct',
  'microsoft', 'conference', 'environment', 'records', 'st', 'district', 'calendar', 'costs', 'style', 'url',
  'front', 'statement', 'update', 'parts', 'aug', 'ever', 'downloads', 'early', 'miles', 'sound',
  'resource', 'present', 'applications', 'either', 'ago', 'document', 'word', 'works', 'material', 'bill',
  'apr', 'written', 'talk', 'federal', 'hosting', 'rules', 'final', 'adult', 'tickets', 'thing',
  'centre', 'requirements', 'via', 'cheap', 'kids', 'finance', 'true', 'minutes', 'else', 'mark',
  'third', 'rock', 'gifts', 'europe', 'reading', 'topics', 'bad', 'individual', 'tips', 'plus',
  'auto', 'cover', 'usually', 'edit', 'together', 'videos', 'percent', 'fast', 'function', 'fact',
  'unit', 'getting', 'global', 'tech', 'meet', 'far', 'economic', 'en', 'player', 'projects',
  'lyrics', 'often', 'subscribe', 'submit', 'germany', 'amount', 'watch', 'included', 'feel', 'though',
  'bank', 'risk', 'thanks', 'everything', 'deals', 'various', 'words', 'linux', 'jul', 'production',
  'commercial', 'james', 'weight', 'town', 'heart', 'advertising', 'received', 'choose', 'treatment', 'newsletter',
  'archives', 'points', 'knowledge', 'magazine', 'error', 'camera', 'jun', 'girl', 'currently', 'construction',
  'toys', 'registered', 'clear', 'golf', 'receive', 'domain', 'methods', 'chapter', 'makes', 'protection',
  'policies', 'loan', 'wide', 'beauty', 'manager', 'india', 'position', 'taken', 'sort', 'listings',
  'models', 'michael', 'known', 'half', 'cases', 'step', 'engineering', 'florida', 'simple', 'quick',
  'none', 'wireless', 'license', 'paul', 'friday', 'lake', 'whole', 'annual', 'published', 'later',
  'basic', 'sony', 'shows', 'corporate', 'google', 'church', 'method', 'purchase', 'customers', 'active',
  'response', 'practice', 'hardware', 'figure', 'materials', 'fire', 'holiday', 'chat', 'enough', 'designed',
  'along', 'among', 'death', 'writing', 'speed', 'html', 'countries', 'loss', 'face', 'brand',
  'discount', 'higher', 'effects', 'created', 'remember', 'standards', 'oil', 'bit', 'yellow', 'political',
  'increase', 'advertise', 'kingdom', 'base', 'near', 'environmental', 'thought', 'stuff', 'french', 'storage',
  'oh', 'japan', 'doing', 'loans', 'shoes', 'entry', 'stay', 'nature', 'orders', 'availability',
  'africa', 'summary', 'turn', 'mean', 'growth', 'notes', 'agency', 'king', 'monday', 'european',
  'activity', 'copy', 'although', 'drug', 'pics', 'western', 'income', 'force', 'cash', 'employment',
  'overall', 'bay', 'river', 'commission', 'ad', 'package', 'contents', 'seen', 'players', 'engine',
  'port', 'album', 'regional', 'stop', 'supplies', 'started', 'administration', 'bar', 'institute', 'views',
  'plans', 'double', 'dog', 'build', 'screen', 'exchange', 'types', 'soon', 'sponsored', 'lines',
  'electronic', 'continue', 'across', 'benefits', 'needed', 'season', 'apply', 'someone', 'held', 'ny',
  'anything', 'printer', 'condition', 'effective', 'believe', 'organization', 'effect', 'asked', 'eur', 'mind',
  'sunday', 'selection', 'casino', 'pdf', 'lost', 'tour', 'menu', 'volume', 'cross', 'anyone',
  'mortgage', 'hope', 'silver', 'corporation', 'wish', 'inside', 'solution', 'mature', 'role', 'rather',
  'weeks', 'addition', 'came', 'supply', 'nothing', 'certain', 'usr', 'executive', 'running', 'lower',
  'necessary', 'union', 'jewelry', 'according', 'dc', 'clothing', 'mon', 'com', 'particular', 'fine',
  'names', 'robert', 'homepage', 'hour', 'gas', 'skills', 'six', 'bush', 'islands', 'advice',
  'career', 'military', 'rental', 'decision', 'leave', 'british', 'teens', 'pre', 'huge', 'sat',
  'woman', 'facilities', 'zip', 'bid', 'kind', 'sellers', 'middle', 'move', 'cable', 'opportunities',
  'taking', 'values', 'division', 'coming', 'tuesday', 'object', 'appropriate', 'machine', 'logo', 'length',
  'actually', 'nice', 'score', 'statistics', 'client', 'ok', 'returns', 'capital', 'follow', 'sample',
  'investment', 'sent', 'shown', 'saturday', 'christmas', 'england', 'culture', 'band', 'flash', 'ms',
  'lead', 'george', 'choice', 'went', 'starting', 'registration', 'fri', 'thursday', 'courses', 'consumer',
  'hi', 'airport', 'foreign', 'artist', 'outside', 'furniture', 'levels', 'channel', 'letter', 'mode',
  'phones', 'ideas', 'wednesday', 'structure', 'fund', 'summer', 'allow', 'degree', 'contract', 'button',
  'releases', 'wed', 'homes', 'super', 'male', 'matter', 'custom', 'virginia', 'almost', 'took',
  'located', 'multiple', 'asian', 'distribution', 'editor', 'inn', 'industrial', 'cause', 'potential', 'song',
  'cnet', 'ltd', 'los', 'hp', 'focus', 'late', 'fall', 'featured', 'idea', 'rooms', 'female',
  'responsible', 'inc', 'communications', 'win', 'associated', 'thomas', 'primary', 'cancer', 'numbers', 'reason',
  'tool', 'browser', 'spring', 'foundation', 'answer', 'voice', 'eg', 'friendly', 'schedule', 'documents',
  'communication', 'purpose', 'feature', 'bed', 'comes', 'police', 'everyone', 'independent', 'ip', 'approach',
  'cameras', 'brown', 'physical', 'operating', 'hill', 'maps', 'medicine', 'deal', 'hold', 'ratings',
  'chicago', 'forms', 'glass', 'happy', 'tue', 'smith', 'wanted', 'developed', 'thank', 'safe',
  'unique', 'survey', 'prior', 'telephone', 'sport', 'ready', 'feed', 'animal', 'sources', 'mexico',
  'population', 'pa', 'regular', 'secure', 'navigation', 'operations', 'therefore', 'ass', 'simply', 'evidence',
  'station', 'christian', 'round', 'paypal', 'favorite', 'understand', 'option', 'master', 'valley', 'recently',
  'probably', 'thu', 'rentals', 'sea', 'built', 'publications', 'blood', 'cut', 'worldwide', 'improve',
  'connection', 'publisher', 'hall', 'larger', 'anti', 'networks', 'earth', 'parents', 'nokia', 'impact',
  'transfer', 'introduction', 'kitchen', 'strong', 'tel', 'carolina', 'wedding', 'properties', 'hospital', 'ground',
  'overview', 'ship', 'accommodation', 'owners', 'disease', 'tx', 'excellent', 'paid', 'italy', 'perfect',
  'hair', 'opportunity', 'kit', 'classic', 'basis', 'command', 'cities', 'william', 'express',

  // Additional words for variety and memorability
  'morning', 'evening', 'night', 'dawn', 'dusk', 'noon', 'midnight', 'today', 'tomorrow', 'yesterday',
  'spring', 'summer', 'autumn', 'winter', 'season', 'weather', 'climate', 'temperature', 'warm', 'cool',
  'cold', 'hot', 'freezing', 'boiling', 'sunny', 'cloudy', 'rainy', 'snowy', 'windy', 'stormy',
  'mountain', 'hill', 'valley', 'canyon', 'peak', 'summit', 'slope', 'forest', 'woods', 'jungle',
  'desert', 'oasis', 'beach', 'shore', 'coast', 'island', 'peninsula', 'continent', 'ocean', 'sea',
  'river', 'stream', 'creek', 'brook', 'lake', 'pond', 'waterfall', 'rapids', 'wave', 'tide',
  'tree', 'flower', 'plant', 'grass', 'leaf', 'branch', 'root', 'seed', 'fruit', 'vegetable',
  'garden', 'park', 'meadow', 'field', 'farm', 'ranch', 'orchard', 'vineyard', 'nursery', 'greenhouse',
  'animal', 'mammal', 'bird', 'fish', 'reptile', 'amphibian', 'insect', 'spider', 'worm', 'snake',
  'lion', 'tiger', 'bear', 'wolf', 'fox', 'deer', 'rabbit', 'mouse', 'rat', 'squirrel',
  'eagle', 'hawk', 'owl', 'sparrow', 'robin', 'pigeon', 'duck', 'goose', 'swan', 'penguin',
  'whale', 'dolphin', 'shark', 'fish', 'salmon', 'tuna', 'trout', 'bass', 'cod', 'crab',
  'horse', 'cow', 'pig', 'sheep', 'goat', 'chicken', 'turkey', 'duck', 'goose', 'dog',
  'cat', 'rabbit', 'hamster', 'guinea', 'parrot', 'canary', 'turtle', 'lizard', 'snake', 'frog',
  'apple', 'banana', 'orange', 'lemon', 'lime', 'grape', 'strawberry', 'blueberry', 'raspberry', 'blackberry',
  'watermelon', 'cantaloupe', 'honeydew', 'pineapple', 'mango', 'papaya', 'coconut', 'avocado', 'peach', 'plum',
  'cherry', 'apricot', 'nectarine', 'kiwi', 'fig', 'date', 'raisin', 'grapefruit', 'tangerine', 'clementine',
  'carrot', 'potato', 'tomato', 'onion', 'garlic', 'lettuce', 'spinach', 'broccoli', 'cauliflower', 'cabbage',
  'pepper', 'cucumber', 'zucchini', 'squash', 'pumpkin', 'corn', 'peas', 'beans', 'lentils', 'chickpeas',
  'bread', 'bagel', 'muffin', 'croissant', 'biscuit', 'cracker', 'pretzel', 'roll', 'bun', 'pastry',
  'rice', 'pasta', 'noodles', 'spaghetti', 'macaroni', 'lasagna', 'pizza', 'sandwich', 'burger', 'taco',
  'soup', 'salad', 'stew', 'chili', 'curry', 'stir', 'fry', 'roast', 'grill', 'bake',
  'coffee', 'tea', 'juice', 'water', 'soda', 'milk', 'beer', 'wine', 'cocktail', 'drink',
  'breakfast', 'lunch', 'dinner', 'brunch', 'snack', 'appetizer', 'dessert', 'meal', 'feast', 'banquet',
  'plate', 'bowl', 'cup', 'glass', 'mug', 'bottle', 'jug', 'pitcher', 'thermos', 'flask',
  'fork', 'spoon', 'knife', 'chopstick', 'spatula', 'ladle', 'whisk', 'grater', 'peeler', 'cutter',
  'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white',
  'gray', 'silver', 'gold', 'bronze', 'copper', 'brass', 'steel', 'iron', 'metal', 'wood',
  'plastic', 'glass', 'paper', 'cardboard', 'fabric', 'leather', 'rubber', 'ceramic', 'stone', 'marble',
  'crimson', 'scarlet', 'vermilion', 'ruby', 'emerald', 'sapphire', 'topaz', 'amethyst', 'diamond', 'pearl',
  'violet', 'indigo', 'magenta', 'cyan', 'teal', 'turquoise', 'navy', 'maroon', 'beige', 'tan',
  'olive', 'lime', 'aqua', 'coral', 'salmon', 'peach', 'lavender', 'lilac', 'mauve', 'ivory',
  'happy', 'sad', 'angry', 'calm', 'excited', 'bored', 'scared', 'brave', 'proud', 'ashamed',
  'guilty', 'innocent', 'jealous', 'trusting', 'loving', 'hating', 'liking', 'disliking', 'wanting', 'needing',
  'having', 'losing', 'winning', 'failing', 'succeeding', 'trying', 'giving', 'taking', 'sharing', 'caring',
  'ignoring', 'helping', 'hurting', 'healing', 'breaking', 'fixing', 'building', 'destroying', 'creating', 'copying',
  'inventing', 'discovering', 'exploring', 'traveling', 'staying', 'leaving', 'arriving', 'departing', 'coming', 'going',
  'returning', 'escaping', 'following', 'leading', 'guiding', 'teaching', 'learning', 'studying', 'reading', 'writing',
  'speaking', 'listening', 'talking', 'whispering', 'shouting', 'singing', 'dancing', 'acting', 'playing', 'working',
  'sleeping', 'waking', 'dreaming', 'thinking', 'remembering', 'forgetting', 'knowing', 'understanding', 'believing', 'doubting',
  'hoping', 'fearing', 'loving', 'hating', 'liking', 'wanting', 'needing', 'having', 'getting', 'giving',
  'taking', 'making', 'doing', 'being', 'becoming', 'seeming', 'appearing', 'disappearing', 'hiding', 'showing',
  'telling', 'asking', 'answering', 'questioning', 'responding', 'replying', 'explaining', 'describing', 'narrating', 'reporting',
  'seeing', 'looking', 'watching', 'observing', 'noticing', 'finding', 'searching', 'seeking', 'discovering', 'exploring',
  'hearing', 'listening', 'feeling', 'touching', 'smelling', 'tasting', 'sensing', 'perceiving', 'experiencing', 'enjoying',
  'running', 'walking', 'jumping', 'hopping', 'skipping', 'crawling', 'climbing', 'descending', 'ascending', 'falling',
  'flying', 'swimming', 'diving', 'floating', 'sinking', 'drifting', 'sailing', 'rowing', 'paddling', 'surfing',
  'driving', 'riding', 'traveling', 'moving', 'staying', 'resting', 'relaxing', 'working', 'playing', 'exercising',
  'eating', 'drinking', 'chewing', 'swallowing', 'digesting', 'cooking', 'baking', 'roasting', 'frying', 'grilling',
  'cleaning', 'washing', 'drying', 'wiping', 'sweeping', 'mopping', 'vacuuming', 'dusting', 'polishing', 'scrubbing',
  'opening', 'closing', 'locking', 'unlocking', 'turning', 'twisting', 'rotating', 'spinning', 'rolling', 'sliding',
  'pushing', 'pulling', 'lifting', 'carrying', 'holding', 'grabbing', 'catching', 'throwing', 'dropping', 'placing',
  'cutting', 'slicing', 'chopping', 'dicing', 'mincing', 'grating', 'peeling', 'crushing', 'grinding', 'mixing',
  'building', 'constructing', 'assembling', 'creating', 'making', 'forming', 'shaping', 'molding', 'carving', 'sculpting',
  'painting', 'drawing', 'sketching', 'coloring', 'designing', 'decorating', 'arranging', 'organizing', 'planning', 'preparing',
  'writing', 'typing', 'printing', 'copying', 'pasting', 'editing', 'revising', 'correcting', 'proofreading', 'publishing',
  'reading', 'studying', 'learning', 'teaching', 'explaining', 'demonstrating', 'showing', 'presenting', 'performing', 'entertaining',
  'singing', 'playing', 'dancing', 'acting', 'performing', 'entertaining', 'amusing', 'interesting', 'fascinating', 'captivating',
  'helping', 'assisting', 'supporting', 'encouraging', 'motivating', 'inspiring', 'guiding', 'leading', 'directing', 'managing',
  'organizing', 'coordinating', 'supervising', 'controlling', 'regulating', 'monitoring', 'checking', 'testing', 'examining', 'inspecting',
  'buying', 'selling', 'trading', 'exchanging', 'bargaining', 'negotiating', 'dealing', 'transacting', 'purchasing', 'ordering',
  'paying', 'charging', 'costing', 'pricing', 'valuing', 'worth', 'expensive', 'cheap', 'affordable', 'reasonable',
  'saving', 'spending', 'investing', 'wasting', 'losing', 'gaining', 'earning', 'making', 'receiving', 'giving',
  'sharing', 'dividing', 'splitting', 'combining', 'mixing', 'blending', 'merging', 'joining', 'connecting', 'linking',
  'starting', 'beginning', 'commencing', 'initiating', 'launching', 'opening', 'finishing', 'ending', 'stopping', 'concluding',
  'continuing', 'proceeding', 'advancing', 'progressing', 'developing', 'growing', 'improving', 'enhancing', 'upgrading', 'updating',
  'changing', 'transforming', 'converting', 'modifying', 'altering', 'adjusting', 'adapting', 'evolving', 'revolutionizing', 'innovating',
  'thinking', 'considering', 'pondering', 'reflecting', 'meditating', 'contemplating', 'analyzing', 'evaluating', 'assessing', 'judging',
  'deciding', 'choosing', 'selecting', 'picking', 'opting', 'preferring', 'favoring', 'approving', 'accepting', 'agreeing',
  'disagreeing', 'rejecting', 'refusing', 'denying', 'opposing', 'resisting', 'protesting', 'objecting', 'complaining', 'criticizing',
  'praising', 'complimenting', 'applauding', 'cheering', 'celebrating', 'honoring', 'respecting', 'admiring', 'appreciating', 'valuing',
  'loving', 'adoring', 'cherishing', 'treasuring', 'valuing', 'caring', 'nurturing', 'protecting', 'defending', 'guarding',
  'trusting', 'believing', 'faith', 'confidence', 'doubt', 'skepticism', 'certainty', 'uncertainty', 'assurance', 'guarantee',
  'hope', 'wish', 'desire', 'dream', 'ambition', 'goal', 'target', 'objective', 'purpose', 'mission',
  'success', 'achievement', 'accomplishment', 'victory', 'triumph', 'win', 'failure', 'defeat', 'loss', 'setback',
  'courage', 'bravery', 'heroism', 'valor', 'fear', 'terror', 'horror', 'panic', 'anxiety', 'worry',
  'peace', 'harmony', 'tranquility', 'serenity', 'calm', 'quiet', 'silence', 'noise', 'sound', 'music',
  'beauty', 'elegance', 'grace', 'charm', 'style', 'fashion', 'trend', 'mode', 'way', 'manner',
  'health', 'wellness', 'fitness', 'strength', 'energy', 'vitality', 'sickness', 'illness', 'disease', 'disorder',
  'life', 'existence', 'being', 'living', 'alive', 'dead', 'death', 'dying', 'birth', 'beginning',
  'time', 'moment', 'instant', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year',
  'decade', 'century', 'millennium', 'era', 'age', 'period', 'epoch', 'generation', 'lifetime', 'eternity',
  'past', 'present', 'future', 'history', 'destiny', 'fate', 'fortune', 'luck', 'chance', 'opportunity',
  'space', 'place', 'area', 'region', 'zone', 'territory', 'domain', 'realm', 'universe', 'cosmos',
  'world', 'earth', 'planet', 'globe', 'sphere', 'nature', 'environment', 'surroundings', 'atmosphere', 'climate',
  'family', 'home', 'house', 'building', 'structure', 'construction', 'architecture', 'design', 'plan', 'blueprint',
  'city', 'town', 'village', 'community', 'neighborhood', 'district', 'area', 'zone', 'region', 'location',
  'country', 'nation', 'state', 'province', 'territory', 'land', 'kingdom', 'empire', 'republic', 'democracy',
  'government', 'politics', 'policy', 'law', 'rule', 'regulation', 'order', 'system', 'administration', 'management',
  'education', 'school', 'college', 'university', 'academy', 'institute', 'learning', 'teaching', 'studying', 'knowledge',
  'science', 'research', 'study', 'investigation', 'experiment', 'test', 'trial', 'analysis', 'examination', 'exploration',
  'technology', 'innovation', 'invention', 'discovery', 'development', 'progress', 'advancement', 'improvement', 'modernization', 'evolution',
  'computer', 'software', 'hardware', 'internet', 'web', 'network', 'system', 'program', 'application', 'digital',
  'phone', 'mobile', 'smartphone', 'tablet', 'laptop', 'desktop', 'device', 'gadget', 'machine', 'equipment',
  'communication', 'message', 'email', 'call', 'talk', 'conversation', 'discussion', 'dialogue', 'chat', 'interview',
  'information', 'data', 'facts', 'details', 'statistics', 'numbers', 'figures', 'values', 'measurements', 'calculations',
  'business', 'company', 'corporation', 'organization', 'enterprise', 'firm', 'agency', 'office', 'workplace', 'industry',
  'money', 'cash', 'currency', 'dollar', 'euro', 'pound', 'yen', 'coin', 'bill', 'note',
  'bank', 'finance', 'investment', 'loan', 'credit', 'debt', 'payment', 'transaction', 'purchase', 'sale',
  'market', 'shop', 'store', 'mall', 'center', 'plaza', 'bazaar', 'marketplace', 'retail', 'commerce',
  'product', 'goods', 'merchandise', 'item', 'commodity', 'supply', 'inventory', 'stock', 'warehouse', 'storage',
  'service', 'help', 'support', 'assistance', 'aid', 'care', 'maintenance', 'repair', 'fix', 'solution',
  'transportation', 'travel', 'trip', 'journey', 'voyage', 'expedition', 'adventure', 'tour', 'vacation', 'holiday',
  'vehicle', 'car', 'automobile', 'truck', 'van', 'bus', 'train', 'railway', 'subway', 'metro',
  'airplane', 'aircraft', 'flight', 'aviation', 'airport', 'helicopter', 'rocket', 'spacecraft', 'satellite', 'station',
  'boat', 'ship', 'vessel', 'yacht', 'sailboat', 'canoe', 'kayak', 'raft', 'ferry', 'cruise',
  'bicycle', 'bike', 'motorcycle', 'scooter', 'skateboard', 'rollerblades', 'walking', 'hiking', 'climbing', 'mountaineering',
  'sports', 'game', 'match', 'competition', 'contest', 'tournament', 'championship', 'league', 'team', 'player',
  'football', 'soccer', 'basketball', 'baseball', 'tennis', 'golf', 'swimming', 'running', 'track', 'field',
  'music', 'song', 'melody', 'tune', 'rhythm', 'beat', 'harmony', 'chord', 'note', 'instrument',
  'art', 'painting', 'drawing', 'sculpture', 'photography', 'film', 'movie', 'theater', 'drama', 'performance',
  'literature', 'book', 'novel', 'story', 'poem', 'poetry', 'prose', 'fiction', 'nonfiction', 'biography',
  'entertainment', 'fun', 'enjoyment', 'pleasure', 'happiness', 'joy', 'delight', 'satisfaction', 'contentment', 'fulfillment',
  'hobby', 'interest', 'passion', 'enthusiasm', 'excitement', 'thrill', 'adventure', 'experience', 'memory', 'moment',
  'friend', 'friendship', 'relationship', 'connection', 'bond', 'tie', 'link', 'association', 'partnership', 'alliance',
  'love', 'romance', 'affection', 'tenderness', 'passion', 'intimacy', 'closeness', 'togetherness', 'unity', 'harmony',
  'person', 'people', 'human', 'individual', 'character', 'personality', 'identity', 'self', 'ego', 'soul',
  'body', 'physical', 'mental', 'emotional', 'spiritual', 'psychological', 'behavioral', 'social', 'cultural', 'personal',
  'mind', 'brain', 'thought', 'idea', 'concept', 'notion', 'theory', 'philosophy', 'belief', 'opinion',
  'heart', 'emotion', 'feeling', 'sensation', 'perception', 'awareness', 'consciousness', 'subconscious', 'intuition', 'instinct',
  'hand', 'finger', 'thumb', 'palm', 'wrist', 'arm', 'elbow', 'shoulder', 'chest', 'back',
  'foot', 'toe', 'ankle', 'leg', 'knee', 'hip', 'waist', 'stomach', 'head', 'face',
  'eye', 'ear', 'nose', 'mouth', 'lip', 'tongue', 'tooth', 'hair', 'skin', 'flesh',
  'blood', 'bone', 'muscle', 'nerve', 'organ', 'tissue', 'cell', 'dna', 'gene', 'chromosome',
  'health', 'medicine', 'doctor', 'nurse', 'hospital', 'clinic', 'treatment', 'therapy', 'cure', 'healing',
  'food', 'nutrition', 'diet', 'meal', 'breakfast', 'lunch', 'dinner', 'snack', 'appetizer', 'dessert',
  'water', 'liquid', 'drink', 'beverage', 'juice', 'soda', 'coffee', 'tea', 'milk', 'alcohol',
  'clothing', 'clothes', 'shirt', 'pants', 'dress', 'skirt', 'coat', 'jacket', 'sweater', 'tshirt',
  'shoes', 'boots', 'sandals', 'slippers', 'socks', 'hat', 'cap', 'gloves', 'scarf', 'belt',
  'jewelry', 'ring', 'necklace', 'bracelet', 'earring', 'watch', 'pendant', 'brooch', 'pin', 'charm',
  'furniture', 'table', 'chair', 'desk', 'bed', 'sofa', 'couch', 'shelf', 'cabinet', 'drawer',
  'kitchen', 'bedroom', 'bathroom', 'living', 'room', 'office', 'garage', 'basement', 'attic', 'porch',
  'garden', 'yard', 'lawn', 'patio', 'deck', 'balcony', 'terrace', 'rooftop', 'driveway', 'sidewalk',
  'tool', 'hammer', 'screwdriver', 'wrench', 'pliers', 'saw', 'drill', 'sander', 'router', 'level',
  'material', 'wood', 'metal', 'plastic', 'glass', 'stone', 'concrete', 'brick', 'cement', 'steel',
  'color', 'paint', 'wallpaper', 'decoration', 'ornament', 'picture', 'frame', 'mirror', 'lamp', 'light',
  'electricity', 'power', 'energy', 'battery', 'outlet', 'switch', 'plug', 'cord', 'wire', 'cable',
  'cleaning', 'soap', 'detergent', 'bleach', 'sponge', 'brush', 'mop', 'broom', 'vacuum', 'bucket',
  'safety', 'security', 'protection', 'defense', 'shield', 'armor', 'helmet', 'vest', 'pad', 'guard',
  'emergency', 'crisis', 'disaster', 'accident', 'incident', 'problem', 'trouble', 'difficulty', 'challenge', 'obstacle',
  'solution', 'answer', 'fix', 'repair', 'resolve', 'solve', 'handle', 'manage', 'control', 'overcome',
  'important', 'significant', 'major', 'minor', 'critical', 'crucial', 'vital', 'essential', 'necessary', 'required',
  'easy', 'simple', 'difficult', 'hard', 'complex', 'complicated', 'challenging', 'demanding', 'tough', 'rough',
  'good', 'bad', 'better', 'best', 'worse', 'worst', 'excellent', 'poor', 'great', 'terrible',
  'big', 'small', 'large', 'tiny', 'huge', 'giant', 'enormous', 'massive', 'immense', 'colossal',
  'long', 'short', 'tall', 'brief', 'extended', 'lengthy', 'endless', 'infinite', 'eternal', 'temporary',
  'wide', 'narrow', 'broad', 'thin', 'thick', 'fat', 'skinny', 'slim', 'heavy', 'light',
  'fast', 'slow', 'quick', 'rapid', 'swift', 'speedy', 'gradual', 'steady', 'constant', 'variable',
  'new', 'old', 'fresh', 'stale', 'modern', 'ancient', 'contemporary', 'traditional', 'classic', 'vintage',
  'young', 'mature', 'adult', 'elderly', 'senior', 'junior', 'childish', 'grown', 'developed', 'primitive',
  'high', 'low', 'upper', 'lower', 'top', 'bottom', 'peak', 'valley', 'summit', 'base',
  'near', 'far', 'close', 'distant', 'remote', 'adjacent', 'nearby', 'surrounding', 'neighboring', 'local',
  'inside', 'outside', 'indoors', 'outdoors', 'interior', 'exterior', 'internal', 'external', 'inner', 'outer',
  'front', 'back', 'behind', 'before', 'after', 'during', 'while', 'since', 'until', 'through',
  'up', 'down', 'above', 'below', 'over', 'under', 'beneath', 'overhead', 'underneath', 'between',
  'left', 'right', 'center', 'middle', 'side', 'edge', 'border', 'boundary', 'limit', 'margin',
  'straight', 'curved', 'bent', 'twisted', 'crooked', 'angled', 'diagonal', 'horizontal', 'vertical', 'parallel',
  'round', 'square', 'circular', 'rectangular', 'triangular', 'oval', 'elliptical', 'geometric', 'symmetrical', 'asymmetrical',
  'smooth', 'rough', 'textured', 'grainy', 'bumpy', 'uneven', 'flat', 'level', 'sloped', 'inclined',
  'dry', 'wet', 'moist', 'damp', 'humid', 'soaked', 'saturated', 'absorbent', 'waterproof', 'resistant',
  'hot', 'cold', 'warm', 'cool', 'freezing', 'boiling', 'temperature', 'heat', 'coldness', 'thermal',
  'bright', 'dark', 'dim', 'lit', 'shaded', 'shadowy', 'glowing', 'shining', 'sparkling', 'dull',
  'loud', 'quiet', 'silent', 'noisy', 'soft', 'gentle', 'harsh', 'muted', 'amplified', 'faint',
  'clean', 'dirty', 'filthy', 'spotless', 'pure', 'contaminated', 'sanitary', 'unsanitary', 'sterile', 'infected',
  'strong', 'weak', 'powerful', 'forceful', 'mighty', 'fragile', 'delicate', 'sturdy', 'durable', 'flimsy',
  'healthy', 'unhealthy', 'fit', 'unfit', 'well', 'sick', 'ill', 'robust', 'frail', 'vigorous',
  'happy', 'unhappy', 'sad', 'miserable', 'joyful', 'cheerful', 'depressed', 'content', 'discontent', 'pleased',
  'calm', 'agitated', 'peaceful', 'turbulent', 'tranquil', 'chaotic', 'serene', 'disturbed', 'relaxed', 'tense',
  'brave', 'cowardly', 'courageous', 'fearful', 'bold', 'timid', 'confident', 'insecure', 'daring', 'cautious',
  'honest', 'dishonest', 'truthful', 'deceitful', 'sincere', 'insincere', 'genuine', 'fake', 'authentic', 'artificial',
  'kind', 'unkind', 'cruel', 'gentle', 'harsh', 'soft', 'tough', 'compassionate', 'heartless', 'considerate',
  'smart', 'stupid', 'intelligent', 'dumb', 'clever', 'foolish', 'wise', 'ignorant', 'brilliant', 'dim',
  'rich', 'poor', 'wealthy', 'impoverished', 'affluent', 'destitute', 'prosperous', 'broke', 'successful', 'unsuccessful',
  'free', 'restricted', 'liberated', 'oppressed', 'independent', 'dependent', 'autonomous', 'controlled', 'unbound', 'confined',
  'safe', 'dangerous', 'secure', 'insecure', 'protected', 'vulnerable', 'sheltered', 'exposed', 'guarded', 'unattended',
  'open', 'closed', 'shut', 'sealed', 'accessible', 'inaccessible', 'available', 'unavailable', 'public', 'private',
  'full', 'empty', 'complete', 'incomplete', 'whole', 'partial', 'total', 'fractional', 'entire', 'divided',
  'first', 'last', 'initial', 'final', 'beginning', 'ending', 'start', 'finish', 'commence', 'conclude',
  'early', 'late', 'prompt', 'delayed', 'punctual', 'tardy', 'timely', 'untimely', 'scheduled', 'unscheduled',
  'regular', 'irregular', 'normal', 'abnormal', 'standard', 'unusual', 'typical', 'atypical', 'common', 'rare',
  'possible', 'impossible', 'likely', 'unlikely', 'probable', 'improbable', 'certain', 'uncertain', 'sure', 'unsure',
  'real', 'unreal', 'actual', 'fictional', 'true', 'false', 'genuine', 'fake', 'authentic', 'counterfeit',
  'right', 'wrong', 'correct', 'incorrect', 'accurate', 'inaccurate', 'precise', 'imprecise', 'exact', 'approximate',
  'perfect', 'imperfect', 'flawless', 'flawed', 'ideal', 'realistic', 'optimal', 'suboptimal', 'excellent', 'poor',
  'beautiful', 'ugly', 'attractive', 'unattractive', 'pretty', 'plain', 'gorgeous', 'hideous', 'stunning', 'repulsive',
  'interesting', 'boring', 'fascinating', 'dull', 'exciting', 'tedious', 'thrilling', 'monotonous', 'engaging', 'unengaging',
  'easy', 'difficult', 'simple', 'complex', 'effortless', 'challenging', 'straightforward', 'complicated', 'basic', 'advanced',
  'cheap', 'expensive', 'affordable', 'costly', 'economical', 'luxurious', 'reasonable', 'unreasonable', 'budget', 'premium',
  'quick', 'slow', 'fast', 'gradual', 'rapid', 'leisurely', 'swift', 'sluggish', 'speedy', 'prolonged',
  'light', 'heavy', 'weightless', 'massive', 'featherlight', 'ponderous', 'buoyant', 'dense', 'airy', 'solid',
  'soft', 'hard', 'gentle', 'firm', 'tender', 'rigid', 'pliable', 'stiff', 'flexible', 'inflexible',
  'warm', 'cool', 'hot', 'cold', 'mild', 'extreme', 'moderate', 'intense', 'temperate', 'severe',
  'wet', 'dry', 'moist', 'arid', 'damp', 'parched', 'humid', 'dehydrated', 'soggy', 'brittle',
  'sharp', 'dull', 'pointed', 'blunt', 'keen', 'obtuse', 'acute', 'gradual', 'sudden', 'gradual',
  'smooth', 'rough', 'silky', 'coarse', 'slick', 'gritty', 'polished', 'raw', 'refined', 'crude',
  'clean', 'dirty', 'pure', 'contaminated', 'spotless', 'filthy', 'pristine', 'sullied', 'immaculate', 'grubby',
  'new', 'old', 'fresh', 'stale', 'recent', 'ancient', 'modern', 'outdated', 'current', 'obsolete',
  'young', 'old', 'youthful', 'aged', 'immature', 'mature', 'juvenile', 'senior', 'childlike', 'elderly',
  'big', 'small', 'large', 'tiny', 'huge', 'miniature', 'giant', 'compact', 'vast', 'cramped',
  'tall', 'short', 'high', 'low', 'lofty', 'deep', 'elevated', 'submerged', 'towering', 'shallow',
  'wide', 'narrow', 'broad', 'slim', 'expansive', 'confined', 'spacious', 'tight', 'roomy', 'restricted',
  'thick', 'thin', 'dense', 'sparse', 'heavy', 'light', 'solid', 'hollow', 'substantial', 'flimsy',
  'long', 'short', 'extended', 'brief', 'lengthy', 'concise', 'protracted', 'abrupt', 'endless', 'momentary',
  'fast', 'slow', 'quick', 'leisurely', 'rapid', 'gradual', 'swift', 'plodding', 'speedy', 'delayed',
  'strong', 'weak', 'powerful', 'feeble', 'mighty', 'frail', 'robust', 'delicate', 'sturdy', 'fragile',
  'bright', 'dark', 'luminous', 'dim', 'radiant', 'shadowy', 'brilliant', 'gloomy', 'shining', 'dull',
  'loud', 'quiet', 'noisy', 'silent', 'booming', 'muted', 'deafening', 'whispering', 'thundering', 'hushed',
  'hot', 'cold', 'scorching', 'freezing', 'blazing', 'icy', 'burning', 'frigid', 'sizzling', 'chilled',
  'happy', 'sad', 'joyful', 'sorrowful', 'cheerful', 'melancholy', 'elated', 'depressed', 'merry', 'gloomy',
  'calm', 'agitated', 'peaceful', 'turbulent', 'serene', 'chaotic', 'tranquil', 'restless', 'composed', 'anxious',
  'brave', 'cowardly', 'courageous', 'fearful', 'heroic', 'timid', 'valiant', 'frightened', 'bold', 'scared',
  'kind', 'cruel', 'gentle', 'harsh', 'compassionate', 'brutal', 'tender', 'severe', 'caring', 'uncaring',
  'honest', 'dishonest', 'truthful', 'deceitful', 'sincere', 'insincere', 'genuine', 'fake', 'trustworthy', 'treacherous',
  'smart', 'dumb', 'intelligent', 'stupid', 'clever', 'foolish', 'bright', 'dim', 'wise', 'ignorant',
  'rich', 'poor', 'wealthy', 'impoverished', 'affluent', 'destitute', 'prosperous', 'needy', 'opulent', 'penniless',
  'free', 'bound', 'liberated', 'confined', 'independent', 'dependent', 'unrestricted', 'restricted', 'autonomous', 'subservient',
  'safe', 'dangerous', 'secure', 'insecure', 'protected', 'vulnerable', 'sheltered', 'exposed', 'guarded', 'unprotected',
  'clean', 'dirty', 'pure', 'tainted', 'spotless', 'filthy', 'pristine', 'contaminated', 'immaculate', 'grubby',
  'good', 'bad', 'excellent', 'terrible', 'wonderful', 'awful', 'superb', 'horrible', 'outstanding', 'poor',
  'easy', 'hard', 'simple', 'difficult', 'effortless', 'challenging', 'straightforward', 'complicated', 'basic', 'complex',
  'important', 'trivial', 'significant', 'insignificant', 'major', 'minor', 'crucial', 'unimportant', 'vital', 'negligible',
  'interesting', 'boring', 'fascinating', 'dull', 'exciting', 'tedious', 'engaging', 'monotonous', 'compelling', 'uninteresting',
  'beautiful', 'ugly', 'attractive', 'repulsive', 'gorgeous', 'hideous', 'stunning', 'unsightly', 'pretty', 'plain',
  'expensive', 'cheap', 'costly', 'affordable', 'pricey', 'economical', 'luxurious', 'budget', 'premium', 'reasonable',
  'healthy', 'unhealthy', 'fit', 'unfit', 'well', 'sick', 'robust', 'frail', 'strong', 'weak',
  'happy', 'unhappy', 'joyful', 'miserable', 'content', 'discontent', 'pleased', 'disappointed', 'satisfied', 'dissatisfied',
  'calm', 'agitated', 'peaceful', 'turbulent', 'relaxed', 'tense', 'serene', 'anxious', 'composed', 'nervous',
  'brave', 'cowardly', 'courageous', 'fearful', 'confident', 'insecure', 'daring', 'cautious', 'bold', 'timid',
  'honest', 'dishonest', 'truthful', 'deceitful', 'sincere', 'insincere', 'genuine', 'fake', 'real', 'artificial',
  'kind', 'unkind', 'compassionate', 'heartless', 'gentle', 'harsh', 'caring', 'uncaring', 'considerate', 'inconsiderate',
  'smart', 'stupid', 'intelligent', 'ignorant', 'clever', 'foolish', 'bright', 'dim', 'wise', 'unwise',
  'rich', 'poor', 'wealthy', 'impoverished', 'affluent', 'destitute', 'prosperous', 'needy', 'successful', 'unsuccessful',
  'free', 'restricted', 'liberated', 'oppressed', 'independent', 'dependent', 'autonomous', 'controlled', 'unbound', 'confined',
  'safe', 'dangerous', 'secure', 'insecure', 'protected', 'vulnerable', 'sheltered', 'exposed', 'guarded', 'unattended',
  'open', 'closed', 'accessible', 'inaccessible', 'available', 'unavailable', 'public', 'private', 'transparent', 'opaque',
  'full', 'empty', 'complete', 'incomplete', 'whole', 'partial', 'total', 'fractional', 'entire', 'divided',
  'right', 'wrong', 'correct', 'incorrect', 'accurate', 'inaccurate', 'precise', 'imprecise', 'exact', 'approximate',
  'real', 'fake', 'actual', 'fictional', 'true', 'false', 'genuine', 'counterfeit', 'authentic', 'artificial',
  'possible', 'impossible', 'likely', 'unlikely', 'probable', 'improbable', 'certain', 'uncertain', 'sure', 'unsure',
  'easy', 'hard', 'simple', 'complex', 'effortless', 'challenging', 'straightforward', 'complicated', 'basic', 'advanced',
  'good', 'bad', 'better', 'best', 'worse', 'worst', 'excellent', 'poor', 'great', 'terrible',
  'big', 'small', 'large', 'tiny', 'huge', 'giant', 'enormous', 'massive', 'immense', 'colossal',
  'new', 'old', 'fresh', 'stale', 'modern', 'ancient', 'contemporary', 'traditional', 'current', 'outdated',
  'fast', 'slow', 'quick', 'gradual', 'rapid', 'leisurely', 'swift', 'sluggish', 'speedy', 'prolonged',
  'hot', 'cold', 'warm', 'cool', 'freezing', 'boiling', 'scorching', 'chilly', 'mild', 'extreme',
  'happy', 'sad', 'joyful', 'sorrowful', 'cheerful', 'melancholy', 'excited', 'depressed', 'content', 'miserable',
  'calm', 'agitated', 'peaceful', 'turbulent', 'relaxed', 'tense', 'serene', 'chaotic', 'composed', 'anxious',
  'brave', 'cowardly', 'courageous', 'fearful', 'bold', 'timid', 'daring', 'cautious', 'heroic', 'frightened',
  'kind', 'cruel', 'gentle', 'harsh', 'compassionate', 'brutal', 'tender', 'severe', 'caring', 'heartless',
  'honest', 'dishonest', 'truthful', 'deceitful', 'sincere', 'insincere', 'genuine', 'fake', 'trustworthy', 'deceitful',
  'smart', 'stupid', 'intelligent', 'ignorant', 'clever', 'foolish', 'bright', 'dim', 'wise', 'unwise',
  'rich', 'poor', 'wealthy', 'impoverished', 'affluent', 'destitute', 'prosperous', 'needy', 'successful', 'unsuccessful',
  'free', 'bound', 'liberated', 'confined', 'independent', 'dependent', 'unrestricted', 'restricted', 'autonomous', 'subservient',
  'safe', 'dangerous', 'secure', 'insecure', 'protected', 'vulnerable', 'sheltered', 'exposed', 'guarded', 'unprotected',
  'clean', 'dirty', 'pure', 'tainted', 'spotless', 'filthy', 'pristine', 'contaminated', 'immaculate', 'grubby',
  'light', 'heavy', 'weightless', 'massive', 'featherlight', 'ponderous', 'buoyant', 'dense', 'airy', 'solid',
  'soft', 'hard', 'gentle', 'firm', 'tender', 'rigid', 'pliable', 'stiff', 'flexible', 'inflexible',
  'warm', 'cool', 'hot', 'cold', 'mild', 'extreme', 'moderate', 'intense', 'temperate', 'severe',
  'wet', 'dry', 'moist', 'arid', 'damp', 'parched', 'humid', 'dehydrated', 'soggy', 'brittle',
  'sharp', 'dull', 'pointed', 'blunt', 'keen', 'obtuse', 'acute', 'gradual', 'sudden', 'abrupt',
  'smooth', 'rough', 'silky', 'coarse', 'slick', 'gritty', 'polished', 'raw', 'refined', 'crude',
  'bright', 'dark', 'luminous', 'dim', 'radiant', 'shadowy', 'brilliant', 'gloomy', 'shining', 'dull',
  'loud', 'quiet', 'noisy', 'silent', 'booming', 'muted', 'deafening', 'whispering', 'thundering', 'hushed',
  'big', 'small', 'large', 'tiny', 'huge', 'miniature', 'giant', 'compact', 'vast', 'cramped',
  'tall', 'short', 'high', 'low', 'lofty', 'deep', 'elevated', 'submerged', 'towering', 'shallow',
  'wide', 'narrow', 'broad', 'slim', 'expansive', 'confined', 'spacious', 'tight', 'roomy', 'restricted',
  'thick', 'thin', 'dense', 'sparse', 'heavy', 'light', 'solid', 'hollow', 'substantial', 'flimsy',
  'long', 'short', 'extended', 'brief', 'lengthy', 'concise', 'protracted', 'abrupt', 'endless', 'momentary',
  'fast', 'slow', 'quick', 'leisurely', 'rapid', 'gradual', 'swift', 'plodding', 'speedy', 'delayed',
  'strong', 'weak', 'powerful', 'feeble', 'mighty', 'frail', 'robust', 'delicate', 'sturdy', 'fragile',
  'new', 'old', 'fresh', 'stale', 'recent', 'ancient', 'modern', 'outdated', 'current', 'obsolete',
  'young', 'old', 'youthful', 'aged', 'immature', 'mature', 'juvenile', 'senior', 'childlike', 'elderly',
  'hot', 'cold', 'warm', 'cool', 'freezing', 'boiling', 'scorching', 'chilly', 'mild', 'extreme',
  'wet', 'dry', 'moist', 'arid', 'damp', 'parched', 'humid', 'dehydrated', 'soggy', 'brittle',
  'clean', 'dirty', 'pure', 'tainted', 'spotless', 'filthy', 'pristine', 'contaminated', 'immaculate', 'grubby',
  'bright', 'dark', 'luminous', 'dim', 'radiant', 'shadowy', 'brilliant', 'gloomy', 'shining', 'dull',
  'loud', 'quiet', 'noisy', 'silent', 'booming', 'muted', 'deafening', 'whispering', 'thundering', 'hushed',
  'hard', 'soft', 'firm', 'gentle', 'tough', 'tender', 'rigid', 'flexible', 'stiff', 'pliable',
  'smooth', 'rough', 'silky', 'coarse', 'slick', 'gritty', 'polished', 'raw', 'refined', 'crude',
  'light', 'heavy', 'weightless', 'massive', 'featherlight', 'ponderous', 'buoyant', 'dense', 'airy', 'solid',
  'warm', 'cool', 'hot', 'cold', 'mild', 'extreme', 'moderate', 'intense', 'temperate', 'severe',
  'big', 'small', 'large', 'tiny', 'huge', 'miniature', 'giant', 'compact', 'vast', 'cramped',
  'tall', 'short', 'high', 'low', 'lofty', 'deep', 'elevated', 'submerged', 'towering', 'shallow',
  'wide', 'narrow', 'broad', 'slim', 'expansive', 'confined', 'spacious', 'tight', 'roomy', 'restricted',
  'thick', 'thin', 'dense', 'sparse', 'heavy', 'light', 'solid', 'hollow', 'substantial', 'flimsy',
  'long', 'short', 'extended', 'brief', 'lengthy', 'concise', 'protracted', 'abrupt', 'endless', 'momentary',
  'fast', 'slow', 'quick', 'leisurely', 'rapid', 'gradual', 'swift', 'plodding', 'speedy', 'delayed',
  'strong', 'weak', 'powerful', 'feeble', 'mighty', 'frail', 'robust', 'delicate', 'sturdy', 'fragile',
  'new', 'old', 'fresh', 'stale', 'recent', 'ancient', 'modern', 'outdated', 'current', 'obsolete',
  'young', 'old', 'youthful', 'aged', 'immature', 'mature', 'juvenile', 'senior', 'childlike', 'elderly',
  'hot', 'cold', 'warm', 'cool', 'freezing', 'boiling', 'scorching', 'chilly', 'mild', 'extreme',
  'wet', 'dry', 'moist', 'arid', 'damp', 'parched', 'humid', 'dehydrated', 'soggy', 'brittle',
  'clean', 'dirty', 'pure', 'tainted', 'spotless', 'filthy', 'pristine', 'contaminated', 'immaculate', 'grubby',
  'bright', 'dark', 'luminous', 'dim', 'radiant', 'shadowy', 'brilliant', 'gloomy', 'shining', 'dull',
  'loud', 'quiet', 'noisy', 'silent', 'booming', 'muted', 'deafening', 'whispering', 'thundering', 'hushed',
  'hard', 'soft', 'firm', 'gentle', 'tough', 'tender', 'rigid', 'flexible', 'stiff', 'pliable',
  'smooth', 'rough', 'silky', 'coarse', 'slick', 'gritty', 'polished', 'raw', 'refined', 'crude',
  'light', 'heavy', 'weightless', 'massive', 'featherlight', 'ponderous', 'buoyant', 'dense', 'airy', 'solid',
  'warm', 'cool', 'hot', 'cold', 'mild', 'extreme', 'moderate', 'intense', 'temperate', 'severe',
  'big', 'small', 'large', 'tiny', 'huge', 'miniature', 'giant', 'compact', 'vast', 'cramped',
  'tall', 'short', 'high', 'low', 'lofty', 'deep', 'elevated', 'submerged', 'towering', 'shallow',
  'wide', 'narrow', 'broad', 'slim', 'expansive', 'confined', 'spacious', 'tight', 'roomy', 'restricted',
  'thick', 'thin', 'dense', 'sparse', 'heavy', 'light', 'solid', 'hollow', 'substantial', 'flimsy',
  'long', 'short', 'extended', 'brief', 'lengthy', 'concise', 'protracted', 'abrupt', 'endless', 'momentary',
  'fast', 'slow', 'quick', 'leisurely', 'rapid', 'gradual', 'swift', 'plodding', 'speedy', 'delayed',
  'strong', 'weak', 'powerful', 'feeble', 'mighty', 'frail', 'robust', 'delicate', 'sturdy', 'fragile',
  'new', 'old', 'fresh', 'stale', 'recent', 'ancient', 'modern', 'outdated', 'current', 'obsolete',
  'young', 'old', 'youthful', 'aged', 'immature', 'mature', 'juvenile', 'senior', 'childlike', 'elderly',
  'hot', 'cold', 'warm', 'cool', 'freezing', 'boiling', 'scorching', 'chilly', 'mild', 'extreme',
  'wet', 'dry', 'moist', 'arid', 'damp', 'parched', 'humid', 'dehydrated', 'soggy', 'brittle',
  'clean', 'dirty', 'pure', 'tainted', 'spotless', 'filthy', 'pristine', 'contaminated', 'immaculate', 'grubby',
  'bright', 'dark', 'luminous', 'dim', 'radiant', 'shadowy', 'brilliant', 'gloomy', 'shining', 'dull',
  'loud', 'quiet', 'noisy', 'silent', 'booming', 'muted', 'deafening', 'whispering', 'thundering', 'hushed',
  'hard', 'soft', 'firm', 'gentle', 'tough', 'tender', 'rigid', 'flexible', 'stiff', 'pliable',
  'smooth', 'rough', 'silky', 'coarse', 'slick', 'gritty', 'polished', 'raw', 'refined', 'crude',
  'light', 'heavy', 'weightless', 'massive', 'featherlight', 'ponderous', 'buoyant', 'dense', 'airy', 'solid',
  'warm', 'cool', 'hot', 'cold', 'mild', 'extreme', 'moderate', 'intense', 'temperate', 'severe',
  'big', 'small', 'large', 'tiny', 'huge', 'miniature', 'giant', 'compact', 'vast', 'cramped',
  'tall', 'short', 'high', 'low', 'lofty', 'deep', 'elevated', 'submerged', 'towering', 'shallow',
  'wide', 'narrow', 'broad', 'slim', 'expansive', 'confined', 'spacious', 'tight', 'roomy', 'restricted',
  'thick', 'thin', 'dense', 'sparse', 'heavy', 'light', 'solid', 'hollow', 'substantial', 'flimsy',
  'long', 'short', 'extended', 'brief', 'lengthy', 'concise', 'protracted', 'abrupt', 'endless', 'momentary',
  'fast', 'slow', 'quick', 'leisurely', 'rapid', 'gradual', 'swift', 'plodding', 'speedy', 'delayed',
  'strong', 'weak', 'powerful', 'feeble', 'mighty', 'frail', 'robust', 'delicate', 'sturdy', 'fragile',
  'new', 'old', 'fresh', 'stale', 'recent', 'ancient', 'modern', 'outdated', 'current', 'obsolete',
  'young', 'old', 'youthful', 'aged', 'immature', 'mature', 'juvenile', 'senior', 'childlike', 'elderly'
];

class PasswordGenerator {
  constructor() {
    this.words = commonWords.filter(w => w.length >= 3);
  }

  getRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  generatePassword(wordCount = 4, options = {}) {
    if (wordCount !== 3 && wordCount !== 4) {
      throw new Error('Word count must be 3 or 4');
    }

    const {
      capitalize = false,
      capitalizeFirst = false,
      numberCount = 0,
      symbolCount = 0,
      separator = ''
    } = options;

    const selectedWords = [];
    const usedIndices = new Set();

    while (selectedWords.length < wordCount) {
      const randomIndex = this.getRandomInt(this.words.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        let word = this.words[randomIndex];
        const isFirst = selectedWords.length === 0;

        if (capitalize || (capitalizeFirst && isFirst)) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }

        selectedWords.push(word);
      }
    }

    // Join words with separator
    let password = selectedWords.join(separator);

    // Build suffix: shuffled mix of requested numbers and symbols
    const extras = [];
    for (let i = 0; i < numberCount; i++) extras.push(this.getRandomNumber());
    for (let i = 0; i < symbolCount; i++) extras.push(this.getRandomSymbol());
    for (let i = extras.length - 1; i > 0; i--) {
      const j = this.getRandomInt(i + 1);
      [extras[i], extras[j]] = [extras[j], extras[i]];
    }

    return password + extras.join('');
  }

  generateMultiple(count, wordCount = 4, options = {}) {
    const passwords = [];
    for (let i = 0; i < count; i++) {
      passwords.push(this.generatePassword(wordCount, options));
    }
    return passwords;
  }

  getRandomNumber() {
    return this.getRandomInt(10).toString();
  }

  getRandomSymbol() {
    const symbols = '!@#$%^&*+=?';
    return symbols[this.getRandomInt(symbols.length)];
  }

  calculateEntropy(password) {
    const wordCount = password.split(/[^a-zA-Z]/).filter(word => word.length > 0).length;
    const wordEntropy = Math.log2(this.words.length) * wordCount;
    
    let charSet = 26;
    if (/[A-Z]/.test(password)) charSet += 26;
    if (/[0-9]/.test(password)) charSet += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charSet += 10;
    
    const charEntropy = password.length * Math.log2(charSet);
    
    return {
      wordCount,
      passwordLength: password.length,
      wordEntropy: Math.round(wordEntropy * 100) / 100,
      charEntropy: Math.round(charEntropy * 100) / 100,
      estimatedEntropy: Math.round(Math.max(wordEntropy, charEntropy) * 100) / 100
    };
  }
}

// GUI Controller
class PasswordGUI {
  constructor() {
    this.generator = new PasswordGenerator();
    this.currentPasswords = [];
    this.initializeElements();
    this.attachEventListeners();
  }

  initializeElements() {
    this.elements = {
      wordCount3: document.getElementById('words3'),
      wordCount4: document.getElementById('words4'),
      passwordCount: document.getElementById('passwordCount'),
      separator: document.getElementById('separator'),
      capNone: document.getElementById('capNone'),
      capFirst: document.getElementById('capFirst'),
      capAll: document.getElementById('capAll'),
      numberCount: document.getElementById('numberCount'),
      symbolCount: document.getElementById('symbolCount'),
      showEntropy: document.getElementById('showEntropy'),
      generateBtn: document.getElementById('generateBtn'),
      passwordsContainer: document.getElementById('passwordsContainer'),
      stats: document.getElementById('stats'),
      totalCount: document.getElementById('totalCount'),
      avgLength: document.getElementById('avgLength'),
      avgEntropy: document.getElementById('avgEntropy'),
      copyAllBtn: document.getElementById('copyAllBtn'),
      clearBtn: document.getElementById('clearBtn')
    };
  }

  attachEventListeners() {
    this.elements.generateBtn.addEventListener('click', () => this.generatePasswords());
    this.elements.copyAllBtn.addEventListener('click', () => this.copyAllPasswords());
    this.elements.clearBtn.addEventListener('click', () => this.clearPasswords());
    
    // Add enter key support for inputs
    this.elements.passwordCount.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.generatePasswords();
    });
    this.elements.separator.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.generatePasswords();
    });
  }

  getOptions() {
    const capValue = this.elements.capFirst.checked ? 'first'
      : this.elements.capAll.checked ? 'all'
      : 'none';

    return {
      wordCount: parseInt(this.elements.wordCount4.checked ? '4' : '3'),
      count: parseInt(this.elements.passwordCount.value),
      separator: this.elements.separator.value,
      capitalize: capValue === 'all',
      capitalizeFirst: capValue === 'first',
      numberCount: parseInt(this.elements.numberCount.value),
      symbolCount: parseInt(this.elements.symbolCount.value),
      showEntropy: this.elements.showEntropy.checked
    };
  }

  generatePasswords() {
    const options = this.getOptions();
    
    // Validate input
    if (options.count < 1 || options.count > 20) {
      this.showError('Please enter a number between 1 and 20 for password count');
      return;
    }

    try {
      this.currentPasswords = this.generator.generateMultiple(
        options.count,
        options.wordCount,
        {
          capitalize: options.capitalize,
          capitalizeFirst: options.capitalizeFirst,
          numberCount: options.numberCount,
          symbolCount: options.symbolCount,
          separator: options.separator
        }
      );
      
      this.displayPasswords(options.showEntropy);
      this.updateStats();
    } catch (error) {
      this.showError(error.message);
    }
  }

  displayPasswords(showEntropy) {
    const container = this.elements.passwordsContainer;
    container.innerHTML = '';

    this.currentPasswords.forEach((password, index) => {
      const passwordItem = document.createElement('div');
      passwordItem.className = 'password-item';

      const passwordText = document.createElement('div');
      passwordText.className = 'password-text';
      passwordText.textContent = password;

      const passwordMeta = document.createElement('div');
      passwordMeta.className = 'password-meta';

      let metaInfo = `#${index + 1} • ${password.length} chars`;
      
      if (showEntropy) {
        const entropy = this.generator.calculateEntropy(password);
        metaInfo += ` • ${entropy.estimatedEntropy} bits`;
        
        const entropyIndicator = this.createEntropyIndicator(entropy.estimatedEntropy);
        passwordMeta.appendChild(entropyIndicator);
      }

      const metaText = document.createElement('span');
      metaText.textContent = metaInfo;
      passwordMeta.appendChild(metaText);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = '📋 Copy';
      copyBtn.addEventListener('click', () => this.copyToClipboard(password));

      passwordMeta.appendChild(copyBtn);

      passwordItem.appendChild(passwordText);
      passwordItem.appendChild(passwordMeta);
      container.appendChild(passwordItem);
    });

    // Show action buttons
    this.elements.copyAllBtn.style.display = 'inline-block';
    this.elements.clearBtn.style.display = 'inline-block';
  }

  createEntropyIndicator(entropy) {
    const indicator = document.createElement('span');
    indicator.className = 'entropy-indicator';
    
    if (entropy < 40) {
      indicator.classList.add('entropy-low');
      indicator.textContent = 'Weak';
    } else if (entropy < 60) {
      indicator.classList.add('entropy-medium');
      indicator.textContent = 'Fair';
    } else if (entropy < 80) {
      indicator.classList.add('entropy-high');
      indicator.textContent = 'Good';
    } else {
      indicator.classList.add('entropy-very-high');
      indicator.textContent = 'Strong';
    }
    
    return indicator;
  }

  updateStats() {
    if (this.currentPasswords.length === 0) return;

    const totalLength = this.currentPasswords.reduce((sum, pwd) => sum + pwd.length, 0);
    const avgLength = Math.round(totalLength / this.currentPasswords.length);
    
    let totalEntropy = 0;
    this.currentPasswords.forEach(pwd => {
      const entropy = this.generator.calculateEntropy(pwd);
      totalEntropy += entropy.estimatedEntropy;
    });
    const avgEntropy = Math.round(totalEntropy / this.currentPasswords.length);

    this.elements.totalCount.textContent = this.currentPasswords.length;
    this.elements.avgLength.textContent = avgLength;
    this.elements.avgEntropy.textContent = `${avgEntropy} bits`;
    this.elements.stats.style.display = 'grid';
  }

  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      this.showSuccess('Password copied to clipboard!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.showSuccess('Password copied to clipboard!');
    }
  }

  async copyAllPasswords() {
    if (this.currentPasswords.length === 0) return;
    
    const allPasswords = this.currentPasswords.join('\n');
    await this.copyToClipboard(allPasswords);
    this.showSuccess('All passwords copied to clipboard!');
  }

  clearPasswords() {
    this.currentPasswords = [];
    this.elements.passwordsContainer.innerHTML = `
      <div class="placeholder">
        <p>Click "Generate Passwords" to create your secure passwords</p>
      </div>
    `;
    this.elements.stats.style.display = 'none';
    this.elements.copyAllBtn.style.display = 'none';
    this.elements.clearBtn.style.display = 'none';
  }

  showError(message) {
    this.showNotification(message, 'error');
  }

  showSuccess(message) {
    this.showNotification(message, 'success');
  }

  showNotification(message, type) {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
      existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      color: white;
      font-weight: 500;
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
      ${type === 'error' ? 'background: #ef4444;' : 'background: #10b981;'}
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Add slide out animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideOut {
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(style);

// Initialize the GUI when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PasswordGUI();
});
